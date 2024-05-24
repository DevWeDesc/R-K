import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { EmailValidator } from "../../../utils/ValidateEmail";
import EmailNotValidError from "../../errors/Customers/EmailNotValidError";
import { GenerateCode } from "../../../utils/GenerateCode";
import { sendMailUseCase } from "../../..";
import SendMailUseCase from "../Mail/SendMailUseCase";
import { ReceiverMailDTO } from "../../../application/DTOs/MailDTO/ReceiverMailDTO";

interface IForgetPasswordUseCase {
  execute(email: string): Promise<string>;
}

export class ForgetPasswordUseCase implements IForgetPasswordUseCase {
  constructor(
    readonly veterinarianRepository: VeterinarianRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  private code: string = GenerateCode();

  public getCode() {
    return this.code;
  }

  async execute(email: string): Promise<string> {
    if (!EmailValidator(email)) throw new EmailNotValidError();

    const userByEmail = await this.veterinarianRepository.getByEmail(email);

    if (!userByEmail) throw new Error("E-mail informado não existe!");

    const receiver: ReceiverMailDTO = {
      subject: "Código de verificação de E-mail",
      html: `<h3>Olá ${userByEmail.name} seu código de verificação é: <strong>${this.code}</strong></h3>`,
      to: userByEmail.email,
      contentFile: "",
    };

    this.code = GenerateCode();

    await sendMailUseCase.execute(receiver);

    return "Código enviado com sucesso!";
  }
}
