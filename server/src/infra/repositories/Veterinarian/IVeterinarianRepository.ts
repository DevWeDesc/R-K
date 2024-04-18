import { Veterinarians } from "@prisma/client";
import { IVeterinarianModel } from "../../../domain/models/Veterinarian";
import { IGenericRepository } from "../IGenericRepository";
import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";

export interface IVeterinarianRepository
  extends IGenericRepository<VeterinarianRequestDTO, Veterinarians> {
  getByEmail(email: string): Promise<IVeterinarianModel | null>;
  getByCRMV(crmv: string): Promise<IVeterinarianModel | null>;
  getSolicitationsByVeterinarian(): Promise<IVeterinarianModel[]>;
}
