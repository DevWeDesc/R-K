import { ReceiverMailDTO } from "../../../../application/DTOs/MailDTO/ReceiverMailDTO";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";
import { SolicitationModel } from "../../../models/Solicitation";
import { HtmlMailFinalizeSolicitation } from "../../../models/mail/MessageHtml";
import SendMailUseCase from "../../Mail/SendMailUseCase";

export default class FinalizeSolicitationUseCase {
  constructor(
    readonly solicitationRepository: SolicitationsRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  async execute(idSolicitation: string) {
    const solicitationById: SolicitationModel | null | any =
      await this.solicitationRepository.findById(idSolicitation);

    if (!solicitationById)
      throw new Error("A solicitação informada é inválida!");

    await this.solicitationRepository.update(idSolicitation, {
      isFinished: true,
    });

    const dataSendEmail: ReceiverMailDTO = {
      to: "ixxvinicius@gmail.com",
      subject: `Finalização de Guia do ${solicitationById.pet.name} RK`,
      text: "Dados",
      html: HtmlMailFinalizeSolicitation(),
    };

    await this.sendMailUseCase.execute(dataSendEmail).catch((err) => {
      throw new Error(err);
    });

    return {
      message:
        "Solicitação finalizada com sucesso, para verificar acesse seu Email!",
    };
  }
}
