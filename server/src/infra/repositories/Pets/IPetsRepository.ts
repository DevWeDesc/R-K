import { Pets } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { PetRequestDTO } from "../../../application/DTOs/PetsDTO/PetRequestDTO";

export interface IPetsRepository
  extends IGenericRepository<PetRequestDTO, Pets> {
  getPetByName(name: string): Promise<Pets[] | null>;
  getPetsByCustomer(customerId: number): Promise<Pets[] | []>;
}
