import { UserLoginRepository } from "../../../infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { compare } from "bcrypt";

export default class AutenticationUserUseCase {
  constructor(
    readonly userLoginRepository: UserLoginRepository,
    readonly veterinarianRepository: VeterinarianRepository
  ) {}

  async execute(email: string, password: string) {
    const userByEmail = await this.veterinarianRepository.getByEmail(email);
    if (!userByEmail) throw new Error("Usuário ou senha inválido!");
    const passwordLoginVet =
      userByEmail.veterinarianLogin && userByEmail.veterinarianLogin.password;

    const passwordIsValid = await compare(
      password,
      passwordLoginVet ? passwordLoginVet : ""
    );

    if (!passwordIsValid) throw new Error("Usuário ou senha inválido!");

    return "Usuário logado com sucesso!";
  }
}
