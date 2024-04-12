import { PetRequestDTO } from "../../../../application/DTOs/PetsDTO/PetRequestDTO";
import PetsRepository from "../../../../infra/repositories/Pets/PetsRepository";
import GetUniqueCustomerUseCase from "../../Customers/GetUniqueCustomer/GetUniqueUserUseCase";

export default class CreatePetUseCase {
  constructor(
    readonly petsRepository: PetsRepository,
    readonly getUniqueCustomerUseCase: GetUniqueCustomerUseCase
  ) {}

  async execute(petRequest: PetRequestDTO) {
    await this.getUniqueCustomerUseCase.getcustomerById(petRequest.customerId);

    const petCreated = await this.petsRepository.create(petRequest);
    return petCreated;
  }
}
