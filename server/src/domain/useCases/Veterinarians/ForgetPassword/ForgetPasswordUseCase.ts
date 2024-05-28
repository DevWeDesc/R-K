import { sendMailUseCase } from "../../../..";
import { ReceiverMailDTO } from "../../../../application/DTOs/MailDTO/ReceiverMailDTO";
import { VeterinarianRepository } from "../../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { GenerateCode } from "../../../../utils/GenerateCode";
import { EmailValidator } from "../../../../utils/ValidateEmail";
import EmailNotValidError from "../../../errors/Customers/EmailNotValidError";
import SendMailUseCase from "../../Mail/SendMailUseCase";

export interface IForgetPasswordUseCase {
  execute(email: string): Promise<string>;
}

export class ForgetPasswordUseCase implements IForgetPasswordUseCase {
  constructor(
    readonly veterinarianRepository: VeterinarianRepository,
    readonly sendMailUseCase: SendMailUseCase
  ) {}

  private code: string = "";
  private email: string = "";

  public getCode() {
    return this.code;
  }
  public getEmail() {
    return this.email;
  }

  private setCode(code: string) {
    this.code = code;
  }
  private setEmail(email: string) {
    this.email = email;
  }

  async execute(email: string): Promise<string> {
    if (!EmailValidator(email)) throw new EmailNotValidError();

    const userByEmail = await this.veterinarianRepository.getByEmail(email);

    if (!userByEmail) throw new Error("E-mail informado não existe!");

    this.setCode(GenerateCode());
    this.setEmail(userByEmail.email);

    const receiver: ReceiverMailDTO = {
      subject: "Código de verificação de E-mail",
      html: `<h3>Olá ${userByEmail.name} seu código de verificação é: <strong>${this.code}</strong></h3>`,
      to: userByEmail.email,
      contentFile: "",
    };

    await sendMailUseCase.execute(receiver);

    return "Código enviado com sucesso!";
  }
}
