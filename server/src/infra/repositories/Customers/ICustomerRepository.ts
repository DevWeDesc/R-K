import { Customers } from "@prisma/client";
import { CustomerRequestDTO } from "../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import { IGenericRepository } from "../IGenericRepository";

export interface ICustomerRepository
  extends IGenericRepository<CustomerRequestDTO, Customers> {
  findByEmail(email: string): Promise<Customers | null>;
  findByPhone(phone: string): Promise<Customers | null>;
}
