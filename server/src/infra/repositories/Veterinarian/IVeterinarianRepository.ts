import { Veterinarians } from "@prisma/client";
import { IVeterinarianModel } from "../../../domain/models/Veterinarian";
import { IGenericRepository } from "../IGenericRepository";

export interface IVeterinarianRepository
  extends IGenericRepository<Veterinarians> {
  getByEmail(email: string): Promise<IVeterinarianModel | null>;
  getByCRMV(crmv: string): Promise<IVeterinarianModel | null>;
}
