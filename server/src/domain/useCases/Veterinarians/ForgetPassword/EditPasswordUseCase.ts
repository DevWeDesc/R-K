import { VeterinarianRepository } from "../../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { ForgetPasswordUseCase } from "./ForgetPasswordUseCase";
import { UserLoginRepository } from "../../../../infra/repositories/UserLogin/UserLoginRepository";
import { hash } from "bcrypt";
import { randomInt } from "crypto";

export default class EditPasswordUseCase {
  constructor(
    readonly forgetPasswordUseCase: ForgetPasswordUseCase,
    readonly veterinarianRepository: VeterinarianRepository,
    readonly userLoginRepository: UserLoginRepository
  ) {}

  public async execute(password: string) {
    const veterinarianByEmail = await this.veterinarianRepository.getByEmail(
      this.forgetPasswordUseCase.getEmail()
    );

    if (!veterinarianByEmail)
      throw new Error("E-mail inválido para edição de senha!");

    let { id } = veterinarianByEmail;

    id = !id ? 0 : id;

    const userLoginById = await this.userLoginRepository.findById(id);

    const randomSalt = randomInt(10, 16);
    const passwordHashed = await hash(password, randomSalt);

    userLoginById.password = passwordHashed;

    await this.userLoginRepository.update(id, userLoginById);

    veterinarianByEmail.id = parseInt(
      veterinarianByEmail.id ? veterinarianByEmail.id.toString() : ""
    );

    return "Senha editada com sucesso!";
  }
}
