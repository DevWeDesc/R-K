import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";

export default class GetUniqueVeterinarianUseCase {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async byCRMV(CRMV: string) {
    const vetByCRMV = await this.veterinarianRepository.getByCRMV(CRMV);
    if (!vetByCRMV) throw new Error("O CRMV informado é inválido");
    return vetByCRMV;
  }

  async byEmail(email: string) {
    const vetByEmail = await this.veterinarianRepository.getByEmail(email);
    if (!vetByEmail) throw new Error("E-mail inválido!");
    return vetByEmail;
  }

  async byId(id: number) {
    const vetById = await this.veterinarianRepository.findById(id);
    if (!vetById) throw new Error("Veterinário inválido!");
    return vetById;
  }
}
