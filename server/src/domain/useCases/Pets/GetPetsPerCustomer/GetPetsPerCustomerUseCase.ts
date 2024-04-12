import PetsRepository from "../../../../infra/repositories/Pets/PetsRepository";
import GetUniqueCustomerUseCase from "../../Customers/GetUniqueCustomer/GetUniqueUserUseCase";
import { IGetPetsPerCustomerUseCase } from "./IGetPetsPerCustomerUseCase";

export default class GetPetsPerCustomerUseCase
  implements IGetPetsPerCustomerUseCase
{
  constructor(
    readonly petsRepository: PetsRepository,
    readonly getUniqueCustomerUseCase: GetUniqueCustomerUseCase
  ) {}
  async execute(customerId: number) {
    await this.getUniqueCustomerUseCase.getcustomerById(customerId);

    const petsPerCustomer = await this.petsRepository.getPetsByCustomer(
      customerId
    );

    if (petsPerCustomer?.length === 0)
      return { message: "O cliente não possui pet cadastrado até o momento!" };

    return petsPerCustomer;
  }
}
