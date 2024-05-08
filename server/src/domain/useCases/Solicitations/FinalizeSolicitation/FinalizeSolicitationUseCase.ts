import { pdfModel } from "../../../..";
import { ReceiverMailDTO } from "../../../../application/DTOs/MailDTO/ReceiverMailDTO";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";
import { SolicitationModel } from "../../../models/Solicitation";
import { HtmlFinalizedSolicitation } from "../../../models/mail/templates/HtmlFinalizedSolicitation";
import { HtmlMailContent } from "../../../models/mail/templates/HtmlMailContent";

import SendMailUseCase from "../../Mail/SendMailUseCase";

// const client = require("twilio")(
//   process.env.ACCOUNTSIDWHATS,
//   process.env.AUTHTOKENWHATS
// );

export default class FinalizeSolicitationUseCase {
  constructor(
    readonly solicitationRepository: SolicitationsRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  async execute(idSolicitation: string, emailVeterinarian?: string) {
    const solicitationById: SolicitationModel | null =
      await this.solicitationRepository.findById(idSolicitation);

    if (!solicitationById)
      throw new Error("A solicitação informada é inválida!");

    await this.solicitationRepository.update(idSolicitation, {
      isFinished: true,
      finishedIn: new Date(),
    });

    await pdfModel.CreatePDF(
      "Guide",
      HtmlFinalizedSolicitation(solicitationById),
      `Guia${solicitationById.pet.name}`
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
        pathFile: `./src/infra/PDFs/Guide/Guia${solicitationById.pet.name}.pdf`,
      };

      // await sendMessageWithWhatsApp.execute(
      //   `Finalização Guia RK do Pet ${solicitationById.pet.name}`,
      //   "+5511914186155"
      // );

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
