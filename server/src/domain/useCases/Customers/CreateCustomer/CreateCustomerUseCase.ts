import { Customers } from "@prisma/client";
import { CustomerRequestDTO } from "../../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import CustomerRepositories from "../../../../infra/repositories/Customers/CustomerRepositories";

import { EmailValidator } from "../../../../utils/ValidateEmail";
import EmailAlreadyUsedError from "../../../errors/Customers/EmailAlreadyUsedError";
import EmailNotValidError from "../../../errors/Customers/EmailNotValidError";
import PhoneAlreadyUsedError from "../../../errors/Customers/PhoneAlreadyUsedError";

export default class CreateCustomersUseCase {
  constructor(readonly customerRepositories: CustomerRepositories) {}
  async execute(customerRequestDTO: CustomerRequestDTO) {
    const validateEmail = EmailValidator(customerRequestDTO.email);
    if (!validateEmail) throw new EmailNotValidError();

    await this.customerRepositories
      .findByEmail(customerRequestDTO.email)
      .then((res: Customers | null) => {
        if (res) throw new EmailAlreadyUsedError();
      });

    await this.customerRepositories
      .findByPhone(customerRequestDTO.phone)
      .then((res: Customers | null) => {
        if (res) throw new PhoneAlreadyUsedError();
      });

    const clientCreatted = await this.customerRepositories.create(
      customerRequestDTO
    );

    return clientCreatted;
  }
}
