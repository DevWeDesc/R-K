import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import { prisma } from "../../../../lib/prismaClient";
import { EmailValidator } from "../../../../utils/ValidateEmail";
import CustomerNotFoundError from "../../../errors/Customers/CustomerNotFoundError";
import EmailNotValidError from "../../../errors/Customers/EmailNotValidError";

export default class GetUniqueCustomerUseCase {
  constructor(readonly customerRepository: CustomerRepository) {}

  async getcustomerById(id: number) {
    return await prisma.customers.findUnique({ where: { id } }).then((res) => {
      if (!res) throw new CustomerNotFoundError();
      return res;
    });
  }

  async getCustomerByEmail(email: string) {
    const validateEmail = EmailValidator(email);
    if (!validateEmail) throw new EmailNotValidError();

    return await prisma.customers.findUnique({ where: { email } });
  }

  async getCustomerByPhone(phone: string) {
    return await prisma.customers.findUnique({ where: { phone } });
  }
}
