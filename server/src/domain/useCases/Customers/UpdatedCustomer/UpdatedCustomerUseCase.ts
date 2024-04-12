import { CustomerRequestDTO } from "../../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import EmailAlreadyUsedError from "../../../errors/Customers/EmailAlreadyUsedError";
import PhoneAlreadyUsedError from "../../../errors/Customers/PhoneAlreadyUsedError";
import GetUniqueCustomerUseCase from "../GetUniqueCustomer/GetUniqueUserUseCase";

export default class UpdatedCustomerUseCase {
  constructor(
    readonly customerRepository: CustomerRepository,
    readonly getUniqueCustomerUseCase: GetUniqueCustomerUseCase
  ) {}

  async execute(customerId: number, customerRequest: CustomerRequestDTO) {
    const { email, phone } = customerRequest;

    const customerById = await this.getUniqueCustomerUseCase.getcustomerById(
      customerId
    );

    const searchIfEmailExists =
      await this.getUniqueCustomerUseCase.getCustomerByEmail(email);
    if (searchIfEmailExists)
      if (customerById.email != searchIfEmailExists.email)
        throw new EmailAlreadyUsedError();

    const searchIfPhoneExists =
      await this.getUniqueCustomerUseCase.getCustomerByPhone(phone);
    if (searchIfPhoneExists)
      if (customerById.phone != searchIfPhoneExists.phone)
        throw new PhoneAlreadyUsedError();

    const userUpdated = await this.customerRepository.update(
      customerId,
      customerRequest
    );

    return userUpdated;
  }
}
