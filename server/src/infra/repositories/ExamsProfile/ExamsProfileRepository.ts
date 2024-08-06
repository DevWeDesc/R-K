import { Exams, ExamsProfile } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsProfileRepository } from "./IExamsProfileRepository";
import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";

export default class ExamsProfileRepository implements IExamsProfileRepository {
  public async findByName(name: string): Promise<ExamsProfile | null> {
    return await prisma.examsProfile.findUnique({ where: { name } });
  }

  public async findById(id: string | number): Promise<ExamsProfile | null> {
    return await prisma.examsProfile.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }

  public async listAll(): Promise<ExamsProfile[] | null> {
    return await prisma.examsProfile.findMany({
      include: { examsInExamProfile: { include: { Exams: true } } },
    });
  }

  public async create(entity: ExamsProfileRequestDTO): Promise<ExamsProfile> {
    return await prisma.examsProfile.create({
      data: entity,
    });
  }

  public async update(
    id: string | number,
    entity: ExamsProfileRequestDTO
  ): Promise<ExamsProfile> {
    return await prisma.examsProfile.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const examIsValid = await this.findById(id);

      if (!examIsValid)
        throw new Error("O perfil de exame informado não existe!");

      return await prisma.examsProfile.delete({
        where: { id: parseInt(id.toString()) },
      });
    } catch (error) {
      return error;
    }
  }
}
