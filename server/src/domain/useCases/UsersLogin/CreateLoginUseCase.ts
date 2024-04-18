import { UsersLogin } from "@prisma/client";
import { UserLoginRepository } from "../../../infra/repositories/UserLogin/UserLoginRepository";
import { hash } from "bcrypt";
import { randomInt } from "crypto";
import CreateVeterinarianUseCase from "../Veterinarians/CreateVeterinarianUseCase";
import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";
import { EmailValidator } from "../../../utils/ValidateEmail";
import EmailNotValidError from "../../errors/Customers/EmailNotValidError";

export class CreateLoginUseCase {
  constructor(
    readonly userLoginRepository: UserLoginRepository,
    readonly createVeterinarianUseCase: CreateVeterinarianUseCase
  ) {}

  public async execute(
    VeterinarianRequestDTO: VeterinarianRequestDTO,
    LoginRequestDTO: UsersLogin
  ): Promise<String> {
    const { password, roleUser } = LoginRequestDTO;
    const { crmv, email } = VeterinarianRequestDTO;

    const randomSalt = randomInt(10, 16);
    const passwordHashed = await hash(password, randomSalt);

    if (!EmailValidator(email)) throw new EmailNotValidError();

    await this.createVeterinarianUseCase.validationEmailExists(email);
    await this.createVeterinarianUseCase.validationCRMVExists(crmv);

    await this.userLoginRepository
      .create({ password: passwordHashed, roleUser })
      .then(
        async (res) =>
          await this.createVeterinarianUseCase.execute(
            VeterinarianRequestDTO,
            res.id
          )
      );

    return "Usuário criado com sucesso!";
  }
}
