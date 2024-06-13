import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { SolicitationByVeterinarian } from "../../models/SolicitationByVeterinarian";

export default class GetSolicitationsByVeterinarian {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async execute(initialDate?: string, finalDate?: string, name?: string) {
    const solicitationsByVeterinarian: SolicitationByVeterinarian =
      await this.veterinarianRepository.getSolicitationsByVeterinarian(
        initialDate,
        finalDate,
        name
      );

    return solicitationsByVeterinarian;
  }
}
