import { Exams } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsRepository } from "./IExamsRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";

export default class ExamsRepository implements IExamsRepository {
  public async findByName(name: string): Promise<Exams | null> {
    return await prisma.exams.findUnique({ where: { name } });
  }

  public async getByName(name: string, pageActual?: number): Promise<Exams[]> {
    const firstLetterSearch = name.substring(0, 1).toUpperCase();
    const nameSearch = firstLetterSearch.concat(name.substring(1, name.length));

    return await prisma.exams.findMany({
      where: { name: { contains: nameSearch } },
      skip: pageActual ? (pageActual - 1) * 10 : 0,
      take: 10,
    });
  }

  public async findById(id: string | number): Promise<Exams | null> {
    return await prisma.exams.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(pageActual?: number): Promise<Exams[] | null> {
    return await prisma.exams.findMany({
      include: { group: true },
      skip: pageActual && (pageActual - 1) * 10,
      take: 10,
    });
  }
  public async countExams(name?: string): Promise<number> {
    return await prisma.exams.count({ where: { name: { contains: name } } });
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
