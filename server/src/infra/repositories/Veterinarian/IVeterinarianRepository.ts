import { Veterinarians } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";
import { IVeterinarianModel } from "../../../domain/models/Veterinarian copy";
import { SolicitationByVeterinarian } from "../../../domain/models/SolicitationByVeterinarian";
import { IQuerySolicitationsPerVet } from "../../../domain/useCases/Veterinarians/GetSolicitationsByVeterinarian";

export interface IVeterinarianRepository
  extends IGenericRepository<VeterinarianRequestDTO, Veterinarians> {
  getByEmail(email: string): Promise<IVeterinarianModel | null>;
  getByCRMV(crmv: string): Promise<IVeterinarianModel | null>;
  getSolicitationsByVeterinarian(
    query: IQuerySolicitationsPerVet
  ): Promise<SolicitationByVeterinarian[]>;
}
