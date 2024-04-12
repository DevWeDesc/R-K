import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import GetUniqueCustomerUseCase from "../GetUniqueCustomer/GetUniqueUserUseCase";

export default class DeletedCustomerUseCase {
  constructor(
    readonly customerRepository: CustomerRepository,
    readonly getUniqueUserUseCase: GetUniqueCustomerUseCase
  ) {}

  async execute(customerId: number) {
    await this.getUniqueUserUseCase.getcustomerById(customerId);
    await this.customerRepository.delete(customerId);
    return;
  }
}
