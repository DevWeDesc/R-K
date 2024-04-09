import { IGenericRepository } from "../IGenericRepository";
import { IGroupRequestDTO } from "../../../application/DTOs/GroupDTO/GroupRequestDTO";
import { Groups } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";

export default class GroupRepository
  implements IGenericRepository<IGroupRequestDTO, Groups>
{
  public async getByName(name: string): Promise<Groups | null> {
    const groupName = await prisma.groups.findFirst({ where: { name: name } });
    return groupName;
  }

  public async update(
    id: string | number,
    entity: IGroupRequestDTO
  ): Promise<Groups> {
    throw new Error("Method not implemented.");
  }
  public async findById(id: string | number): Promise<Groups | null> {
    return await prisma.groups.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(): Promise<Groups[] | null> {
    return await prisma.groups.findMany();
  }
  public async create(entity: IGroupRequestDTO): Promise<Groups> {
    return await prisma.groups.create({ data: entity });
  }
  public async delete(id: string | number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
