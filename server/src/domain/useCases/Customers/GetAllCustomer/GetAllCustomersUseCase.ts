import { UniqueCustomerEmailPhoneDTO } from "../../../../application/DTOs/CustomersDTO/UniqueCustomerEmailPhoneDTO";
import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import GetUniqueCustomerUseCase from "../GetUniqueCustomer/GetUniqueUserUseCase";

export default class GetAllCustomersUseCase {
  constructor(
    readonly clientsRepositories: CustomerRepository,
    readonly getUniqueCustomerUseCase: GetUniqueCustomerUseCase
  ) {}

  async execute(customerDTO?: UniqueCustomerEmailPhoneDTO) {
    if (customerDTO?.email)
      return await this.getUniqueCustomerUseCase.getCustomerByEmail(
        customerDTO?.email
      );

    if (customerDTO?.phone)
      return await this.getUniqueCustomerUseCase.getCustomerByPhone(
        customerDTO?.phone
      );

    return await this.clientsRepositories.listAll();
  }
}
