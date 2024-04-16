import { PetResponseDTO } from "../../../../application/DTOs/PetsDTO/PetResponseDTO";
import { PetPerCustomerResponseDTO } from "../../../../application/DTOs/PetsDTO/PetPerCustomerResponseDTO";

export interface IGetPetsPerCustomerUseCase {
  execute(
    customerId: number
  ): Promise<PetResponseDTO | PetPerCustomerResponseDTO>;
}
