import { Customers } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { CustomerRequestDTO } from "../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import { ICustomerRepository } from "./ICustomerRepository";

export default class CustomerRepository implements ICustomerRepository {
  public async findByCpf(
    cpf: string
  ): Promise<{
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
  } | null> {
    return await prisma.customers.findUnique({ where: { cpf } });
  }

  public async findByEmail(email: string): Promise<Customers | null> {
    return await prisma.customers.findUnique({
      where: { email },
      include: { pets: true },
    });
  }
  public async findByPhone(phone: string): Promise<Customers | null> {
    return await prisma.customers.findUnique({
      where: { phone },
      include: { pets: true },
    });
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
      include: { pets: true },
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
