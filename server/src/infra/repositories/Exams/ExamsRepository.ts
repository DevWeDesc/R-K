import { Exams } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsRepository } from "./IExamsRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import { ExamTypeEnum } from "../../../domain/enums/ExamTypeEnum";

export default class ExamsRepository implements IExamsRepository {
  public async createMany(exams: string[]): Promise<any> {
    const examsArrayFiltered: ExamsRequestDTO[] = [];
    for (const exam of exams) {
      const findExamByName = await this.findByName(exam);

      const data: ExamsRequestDTO = {
        name: exam,
        value: 200,
        isHighligth: false,
        deadline: "",
        specie: "Canino / Felino",
        typeExam: "NOT_DEFINED" as ExamTypeEnum,
      };
      if (!findExamByName) {
        examsArrayFiltered.push(data);
      }
    }
    const examsCreated = await prisma.exams.createMany({
      data: examsArrayFiltered as any,
    });

    return examsCreated;
  }

  public async findByTypeExam(
    typeExam: ExamTypeEnum
  ): Promise<Exams[] | Exams> {
    return await prisma.exams.findMany({ where: { typeExam } });
  }

  public async findByName(name: string): Promise<Exams | null> {
    return await prisma.exams.findUnique({ where: { name } });
  }

  public async getByName(name: string, pageActual?: number): Promise<Exams[]> {
    return await prisma.exams.findMany({
      where: { name: { contains: name, mode: "insensitive" } },
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

  // public async create(entity: ExamsRequestDTO): Promise<Exams> {
  //   return await prisma.exams.create({
  //     data: {
  //       ...entity,
  //       name: entity.name,
  //       specie: entity.specie ? entity.specie : "Canino / Felino",
  //     },
  //   });
  // }

  public async create(entity: ExamsRequestDTO): Promise<Exams> {
    const existingExam = await prisma.exams.findUnique({
      where: { name: entity.name },
    });

    if (existingExam) {
      throw new Error(`Exame com o nome ${entity.name} já existe.`);
    }

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
