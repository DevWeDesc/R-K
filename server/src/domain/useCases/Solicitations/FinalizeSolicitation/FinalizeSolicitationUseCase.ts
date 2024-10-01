import { pdfModel, sendMessageWithWhatsApp } from "../../../..";
import { ReceiverMailDTO } from "../../../../application/DTOs/MailDTO/ReceiverMailDTO";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";
import { SolicitationModel } from "../../../models/Solicitation";
import { HtmlFinalizedSolicitation } from "../../../models/mail/templates/HtmlFinalizedSolicitation";
import { HtmlMailContent } from "../../../models/mail/templates/HtmlMailContent";
import SendMailUseCase from "../../Mail/SendMailUseCase";
import { FormatterMessageFromWhatsApp } from "../../WhatsApp/FormatterMessageFromWhatsApp";
import { FormatedDate } from "../../../../utils/FormatedDate";
import createPDFDocument from "../../../../domain/models/pdf/PdfDocument";
import path from "path";
import { FinalizeSolicitationRequestDTO } from "../../../../application/DTOs/SolicitationsDTO/FinalizeSolicitationRequestDTO";

export default class FinalizeSolicitationUseCase {
  constructor(
    readonly solicitationRepository: SolicitationsRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  async execute(
    idSolicitation: string,
    requestDTO: FinalizeSolicitationRequestDTO
  ) {
    let solicitationById: SolicitationModel =
      await this.solicitationRepository.findById(idSolicitation);

    if (!solicitationById)
      throw new Error("A solicitação informada é inválida!");
    const dateFinished = new Date();

    const slugForSolicitation = `Guia-${
      solicitationById.pet.name
    }-${FormatedDate(dateFinished, "short", "medium")
      .replaceAll("/", "-")
      .replaceAll(", ", "_")
      .replaceAll(":", "-")}`;

    await this.solicitationRepository
      .update(idSolicitation, {
        isFinished: true,
        finishedIn: dateFinished,
        slug: slugForSolicitation,
        observation: requestDTO.observation,
        bodyAnimalImage: requestDTO.bodyAnimalImage,
      })
      .then(async () => {
        solicitationById = await this.solicitationRepository.findById(
          idSolicitation
        );
      });

    const pathRelative = path.join(
      __dirname,
      "../../../../",
      `infra/PDFs/${slugForSolicitation}.pdf`
    );

    await createPDFDocument(solicitationById);

    // await pdfModel.CreatePDF(
    //   HtmlFinalizedSolicitation(solicitationById),
    //   slugForSolicitation
    // );

    setTimeout(async () => {
      const dataSendEmail: ReceiverMailDTO = {
        to: `
          r.k.ofc2@gmail.com,
          ${solicitationById.pet.customer.email},
          ${requestDTO.emailVeterinarian && requestDTO.emailVeterinarian}
        `,
        subject: `Finalização Guia RK do Pet ${solicitationById.pet.name}`,
        html: HtmlMailContent,
        pathFile: pathRelative,
      };

      await sendMessageWithWhatsApp.execute(
        `${FormatterMessageFromWhatsApp(
          solicitationById,
          slugForSolicitation
        )}`,
        `+55${solicitationById.pet.customer.phone}`,
        "https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
      );

      // await this.sendMailUseCase.execute(dataSendEmail).catch((err) => {
      //   throw new Error(err);
      // });
    }, 3000);

    return {
      message:
        "Solicitação finalizada com sucesso, para verificar acesse seu Email!",
    };
  }
}
