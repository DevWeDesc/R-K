import { pdfModel, sendMessageWithWhatsApp } from "../../../..";
import { ReceiverMailDTO } from "../../../../application/DTOs/MailDTO/ReceiverMailDTO";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";
import { SolicitationModel } from "../../../models/Solicitation";
import { HtmlFinalizedSolicitation } from "../../../models/mail/templates/HtmlFinalizedSolicitation";
import { HtmlMailContent } from "../../../models/mail/templates/HtmlMailContent";
import SendMailUseCase from "../../Mail/SendMailUseCase";
import { FormatterMessageFromWhatsApp } from "../../WhatsApp/FormatterMessageFromWhatsApp";
import { FormatedDate } from "../../../../utils/FormatedDate";

export default class FinalizeSolicitationUseCase {
  constructor(
    readonly solicitationRepository: SolicitationsRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  async execute(
    idSolicitation: string,
    emailVeterinarian?: string,
    observation?: string
  ) {
    const solicitationById: SolicitationModel | null =
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

    await this.solicitationRepository.update(idSolicitation, {
      isFinished: true,
      finishedIn: dateFinished,
      slug: slugForSolicitation,
      observation,
    });

    await pdfModel.CreatePDF(
      "Guide",
      HtmlFinalizedSolicitation(solicitationById),
      slugForSolicitation
    );

    setTimeout(async () => {
      const dataSendEmail: ReceiverMailDTO = {
        to: ` 
          r.k.ofc2@gmail.com,
          ${solicitationById.pet.customer.email},
          ${emailVeterinarian && emailVeterinarian}
        `,
        subject: `Finalização Guia RK do Pet ${solicitationById.pet.name}`,
        html: HtmlMailContent,
        pathFile: `./src/infra/PDFs/Guide/${slugForSolicitation}.pdf`,
      };

      await sendMessageWithWhatsApp.execute(
        `${FormatterMessageFromWhatsApp(
          solicitationById,
          slugForSolicitation
        )}`,
        `+55${solicitationById.pet.customer.phone}`,
        "https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
      );

      await this.sendMailUseCase.execute(dataSendEmail).catch((err) => {
        throw new Error(err);
      });
    }, 2000);

    return {
      message:
        "Solicitação finalizada com sucesso, para verificar acesse seu Email!",
    };
  }
}
