import { Customers } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { ICustomerRepositories } from "./ICustomerRepositories";
import { CustomerRequestDTO } from "../../../application/DTOs/CustomersDTO/CustomersRequestDTO";

export default class CustomerRepositories implements ICustomerRepositories {
  public async findByEmail(email: string): Promise<Customers | null> {
    return await prisma.customers.findUnique({ where: { email } });
  }
  public async findByPhone(phone: string): Promise<Customers | null> {
    return await prisma.customers.findUnique({ where: { phone } });
  }
  public async update(
    id: string | number,
    entity: CustomerRequestDTO
  ): Promise<Customers> {
    const clientUpdated = await prisma.customers.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
    return clientUpdated;
  }
  public async findById(id: string | number): Promise<Customers | null> {
    return await prisma.customers.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(): Promise<Customers[] | null> {
    return await prisma.customers.findMany();
  }
  public async create(entity: CustomerRequestDTO): Promise<Customers> {
    const clientCreated = await prisma.customers.create({ data: entity });
    return clientCreated;
  }
  public async delete(id: string | number): Promise<boolean> {
    await prisma.customers.delete({ where: { id: parseInt(id.toString()) } });
    return true;
  }
}
