import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";

export default class GetSolicitationsByVeterinarian {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async execute() {
    return this.veterinarianRepository.getSolicitationsByVeterinarian();
  }
}
