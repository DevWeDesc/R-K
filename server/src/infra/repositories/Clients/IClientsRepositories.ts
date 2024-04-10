import { Clients } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ClientsRequestDTO } from "../../../application/DTOs/ClientsDTO/ClientsRequestDTO";

export interface IClientsRepositories
  extends IGenericRepository<ClientsRequestDTO, Clients> {
  findByEmail(email: string): Promise<Clients | null>;
  findByPhone(phone: string): Promise<Clients | null>;
}
