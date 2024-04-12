import { Pets } from "@prisma/client";
import { PetResponseDTO } from "../../../../application/DTOs/PetsDTO/PetResponseDTO";

export interface IGetPetsPerCustomerUseCase {
  execute(customerId: number): Promise<PetResponseDTO | Pets[]>;
}
