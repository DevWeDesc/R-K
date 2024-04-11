import { UniqueCustomerEmailPhoneDTO } from "../../../../application/DTOs/CustomersDTO/UniqueCustomerEmailPhoneDTO";
import CustomerRepositories from "../../../../infra/repositories/Customers/CustomerRepositories";
import GetUniqueCustomerUseCase from "../GetUniqueCustomer/GetUniqueUserUseCase";

export default class GetAllCustomersUseCase {
  constructor(
    readonly clientsRepositories: CustomerRepositories,
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
