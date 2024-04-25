import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";

export default class CreateVeterinarianUseCase {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}

  async validationEmailExists(email: string) {
    const emailExists = await this.veterinarianRepository.getByEmail(email);
    if (emailExists) throw new Error("Já existe uma conta com esse E-mail!");
  }

  async validationCRMVExists(crmv: string) {
    const crmvExists = await this.veterinarianRepository.getByCRMV(crmv);
    if (crmvExists) throw new Error("O CRMV Já está em uso!");
  }

  async execute(
    veterinarianRequest: VeterinarianRequestDTO,
    userLoginID: number
  ) {
    const { crmv, email, name, phone, state } = veterinarianRequest;

    await this.validationEmailExists(email);
    await this.validationCRMVExists(crmv);

    return await this.veterinarianRepository.create({
      crmv,
      email,
      name,
      phone,
      state,
      usersLoginId: userLoginID,
    });
  }
}
