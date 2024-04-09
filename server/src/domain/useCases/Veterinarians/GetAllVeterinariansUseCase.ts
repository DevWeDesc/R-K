import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";

export default class GetAllVeterinariansUseCase {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async execute() {
    return await this.veterinarianRepository.listAll();
  }
}
