import { Exams, ExamsProfile } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsProfileRepository } from "./IExamsProfileRepository";
import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";

export default class ExamsProfileRepository implements IExamsProfileRepository {
  constructor() {}

  public async findByName(name: string): Promise<ExamsProfile | null> {
    return await prisma.examsProfile.findUnique({ where: { name } });
  }

  public async findById(id: string | number): Promise<ExamsProfile | null> {
    return await prisma.examsProfile.findUnique({
      where: { id: id.toString() },
    });
  }

  public async listAll(): Promise<ExamsProfile[] | null> {
    return await prisma.examsProfile.findMany({
      include: { examsInExamProfile: { include: { Exams: true } } },
    });
  }

  public async create(entity: ExamsProfileRequestDTO): Promise<ExamsProfile> {
    return prisma.$transaction(async (tx) => {
      const validateNameExists = await tx.examsProfile.findUnique({
        where: { name: entity.name },
      });
      if (validateNameExists)
        throw new Error(`O perfil de exame: ${entity.name} já existe!`);

      const examProfileCreated = await tx.examsProfile.create({
        data: entity,
      });

      return examProfileCreated;
    });
  }

  public async update(
    id: string | number,
    entity: ExamsProfileRequestDTO
  ): Promise<ExamsProfile> {
    return await prisma.examsProfile.update({
      where: { id: id.toString() },
      data: entity,
    });
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const examIsValid = await this.findById(id);

      if (!examIsValid)
        throw new Error("O perfil de exame informado não existe!");

      return await prisma.examsProfile.delete({
        where: { id: id.toString() },
      });
    } catch (error) {
      return error;
    }
  }
}
