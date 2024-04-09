import { UsersLogin, Veterinarians } from "@prisma/client";
import { UserLoginRepository } from "../../../infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { hash } from "bcrypt";
import { randomInt } from "crypto";

export class CreateLoginUseCase {
  constructor(
    readonly userLoginRepository: UserLoginRepository,
    readonly veterinarianRepository: VeterinarianRepository
  ) {}

  public async execute(
    VeterinarianRequestDTO: Veterinarians,
    LoginRequestDTO: UsersLogin
  ): Promise<String> {
    const { crmv, email, name, phone, state } = VeterinarianRequestDTO;
    const { password, roleUser } = LoginRequestDTO;

    const emailExists = await this.veterinarianRepository.getByEmail(
      VeterinarianRequestDTO.email
    );
    if (emailExists) throw new Error("Já existe uma conta com esse E-mail!");

    const crmvExists = await this.veterinarianRepository.getByCRMV(
      VeterinarianRequestDTO.crmv
    );
    if (crmvExists) throw new Error("O CRMV Já está em uso!");

    const randomSalt = randomInt(10, 16);

    const passwordHashed = await hash(password, randomSalt);

    await this.userLoginRepository
      .create({ password: passwordHashed, roleUser })
      .then(
        async (res) =>
          await this.veterinarianRepository.create({
            crmv,
            email,
            name,
            phone,
            state,
            usersLoginId: res.id,
          })
      );

    return "Usuário criado com sucesso!";
  }
}
