import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import { EmailValidator } from "../../../../utils/ValidateEmail";
import CustomerNotFoundError from "../../../errors/Customers/CustomerNotFoundError";
import EmailNotValidError from "../../../errors/Customers/EmailNotValidError";

export default class GetUniqueCustomerUseCase {
  constructor(readonly customerRepository: CustomerRepository) {}

  async getcustomerById(id: number) {
    return await this.customerRepository.findById(id).then((res) => {
      if (!res) throw new CustomerNotFoundError();
      return res;
    });
  }

  async getCustomerByEmail(email: string) {
    const validateEmail = EmailValidator(email);
    if (!validateEmail) throw new EmailNotValidError();

    const userByEmail = await this.customerRepository.findByEmail(email);

    if (!userByEmail) throw new Error("O E-mail informado não existe!");
    return userByEmail;
  }

  async getCustomerByPhone(phone: string) {
    return await this.customerRepository.findByPhone(phone);
  }
}
