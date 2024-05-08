import { Customers } from "@prisma/client";
import { CustomerRequestDTO } from "../../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import CustomerRepository from "../../../../infra/repositories/Customers/CustomerRepository";
import EmailAlreadyUsedError from "../../../errors/Customers/EmailAlreadyUsedError";
import PhoneAlreadyUsedError from "../../../errors/Customers/PhoneAlreadyUsedError";
import GetUniqueCustomerUseCase from "../GetUniqueCustomer/GetUniqueUserUseCase";

export default class CreateCustomersUseCase {
  constructor(
    readonly customerRepositories: CustomerRepository,
    readonly getUniqueCustomerUseCase: GetUniqueCustomerUseCase
  ) {}
  async execute(customerRequestDTO: CustomerRequestDTO) {
    const emailExists = await this.customerRepositories.findByEmail(
      customerRequestDTO.email
    );
    if (emailExists) throw new EmailAlreadyUsedError();

    await this.customerRepositories
      .findByPhone(customerRequestDTO.phone)
      .then((res: Customers | null) => {
        if (res) throw new PhoneAlreadyUsedError();
      });

    await this.customerRepositories
      .findByCpf(customerRequestDTO.cpf)
      .then((res) => {
        if (res) throw new Error("Já existe esse CPF no sistema!");
      });

    const clientCreatted = await this.customerRepositories.create(
      customerRequestDTO
    );

    return clientCreatted;
  }
}
