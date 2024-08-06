import { Exams } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsRepository } from "./IExamsRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import { ExamTypeEnum } from "../../../domain/enums/ExamTypeEnum";

export default class ExamsRepository implements IExamsRepository {
  public async findByTypeExam(
    typeExam: ExamTypeEnum
  ): Promise<Exams[] | Exams> {
    return await prisma.exams.findMany({ where: { typeExam } });
  }

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

  public async listAll(
    queryParams: QueryParamsListAllExams
  ): Promise<Exams[] | null> {
    return await prisma.exams.findMany({
      where: { name: { contains: queryParams.name, mode: "insensitive" } },
      include: { group: true },
      orderBy: [{ isHighligth: "desc" }, { value: queryParams.filterByValue }],
      skip: queryParams.pageActual && (queryParams.pageActual - 1) * 10,
      take: 10,
    });
  }
  public async countExams(name?: string): Promise<number> {
    return await prisma.exams.count({
      where: { name: { contains: name } },
    });
  }

  public async create(entity: ExamsRequestDTO): Promise<Exams> {
    return await prisma.exams.create({
      data: {
        ...entity,
        specie: entity.specie ? entity.specie : "Canino / Felino",
      },
    });
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

  public async delete(id: string | number): Promise<any> {
    try {
      const examIsValid = await this.findById(id);

      if (!examIsValid) throw new Error("O exame informado não existe!");

      return await prisma.exams.delete({
        where: { id: parseInt(id.toString()) },
      });
    } catch (error) {
      return error;
    }
  }
}
