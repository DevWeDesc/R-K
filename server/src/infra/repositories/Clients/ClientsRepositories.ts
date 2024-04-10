import { Clients } from "@prisma/client";
import { ClientsRequestDTO } from "../../../application/DTOs/ClientsDTO/ClientsRequestDTO";
import { IClientsRepositories } from "./IClientsRepositories";
import { prisma } from "../../../lib/prismaClient";

export default class clientsRepositories implements IClientsRepositories {
  public async findByEmail(email: string): Promise<Clients | null> {
    return await prisma.clients.findUnique({ where: { email } });
  }
  public async findByPhone(phone: string): Promise<Clients | null> {
    return await prisma.clients.findUnique({ where: { phone } });
  }
  public async update(
    id: string | number,
    entity: ClientsRequestDTO
  ): Promise<Clients> {
    const clientUpdated = await prisma.clients.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
    return clientUpdated;
  }
  public async findById(id: string | number): Promise<Clients | null> {
    return await prisma.clients.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(): Promise<Clients[] | null> {
    return await prisma.clients.findMany();
  }
  public async create(entity: ClientsRequestDTO): Promise<Clients> {
    const clientCreated = await prisma.clients.create({ data: entity });
    return clientCreated;
  }
  public async delete(id: string | number): Promise<boolean> {
    await prisma.clients.delete({ where: { id: parseInt(id.toString()) } });
    return true;
  }
}
