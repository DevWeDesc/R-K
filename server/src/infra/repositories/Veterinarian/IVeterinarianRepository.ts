import { Veterinarians } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";
import { IVeterinarianModel } from "../../../domain/models/Veterinarian copy";
import { SolicitationByVeterinarian } from "../../../domain/models/SolicitationByVeterinarian";

export interface IVeterinarianRepository
  extends IGenericRepository<VeterinarianRequestDTO, Veterinarians> {
  getByEmail(email: string): Promise<IVeterinarianModel | null>;
  getByCRMV(crmv: string): Promise<IVeterinarianModel | null>;
  getSolicitationsByVeterinarian(
    initialDate?: string,
    finalDate?: string,
    name?: string
  ): Promise<SolicitationByVeterinarian[]>;
}
