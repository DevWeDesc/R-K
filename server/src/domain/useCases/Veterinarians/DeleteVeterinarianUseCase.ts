import { UserLoginRepository } from "../../../infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import VeterinarianNotFoundError from "../../errors/VeterinarianError/VeterinarianNotFoundError";

export default class DeleteVeterinarianUseCase {
  constructor(
    readonly veterinarianRepository: VeterinarianRepository,
    readonly userLoginRepository: UserLoginRepository
  ) {}

  public async execute(idVeterinarian: number) {
    const idIsValid = await this.veterinarianRepository.findById(
      idVeterinarian
    );
    if (!idIsValid) throw new VeterinarianNotFoundError();

    await this.veterinarianRepository.delete(idVeterinarian);
    await this.userLoginRepository.delete(idVeterinarian);

    return;
  }
}
