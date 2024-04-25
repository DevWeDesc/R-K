import { Exams } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsRepository } from "./IExamsRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";

export default class ExamsRepository implements IExamsRepository {
  public async getByName(name: string): Promise<Exams[]> {
    return await prisma.exams.findMany({
      where: { name: { contains: name } },
    });
  }
  public async findById(id: string | number): Promise<Exams | null> {
    return await prisma.exams.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(): Promise<Exams[] | null> {
    return await prisma.exams.findMany({ include: { group: true } });
  }
  public async create(entity: ExamsRequestDTO): Promise<Exams> {
    return await prisma.exams.create({ data: entity });
  }
  public async update(
    id: string | number,
    entity: ExamsRequestDTO
  ): Promise<Exams> {
    return await prisma.exams.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
  }
  public async delete(id: string | number): Promise<boolean> {
    try {
      await prisma.exams.delete({
        where: { id: parseInt(id.toString()) },
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
