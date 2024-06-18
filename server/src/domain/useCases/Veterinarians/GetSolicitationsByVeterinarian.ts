import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import { SolicitationByVeterinarian } from "../../models/SolicitationByVeterinarian";

export interface IQuerySolicitationsPerVet {
  initialDate?: string;
  finalDate?: string;
  nameVeterinarian?: string;
  namePet?: string;
  nameCustomer?: string;
}

export default class GetSolicitationsByVeterinarian {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async execute(query: IQuerySolicitationsPerVet) {
    const solicitationsByVeterinarian: SolicitationByVeterinarian =
      await this.veterinarianRepository.getSolicitationsByVeterinarian(query);

    return solicitationsByVeterinarian;
  }
}
