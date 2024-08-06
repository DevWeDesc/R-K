import { ExamsInExamProfile } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsInExamProfileRepository } from "./IExamsInExamProfileRepository";
import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";

export default class ExamsInExamProfileRepository
  implements IExamsInExamProfileRepository
{
  public async findById(
    id: string | number
  ): Promise<ExamsInExamProfile | null> {
    return await prisma.examsInExamProfile.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }

  public async listAll(): Promise<ExamsInExamProfile[] | null> {
    return await prisma.examsInExamProfile.findMany();
  }

  public async create(
    entity: ExamsInExamProfileRequestDTO
  ): Promise<ExamsInExamProfile> {
    return await prisma.examsInExamProfile.create({
      data: entity,
    });
  }

  public async update(
    id: string | number,
    entity: ExamsInExamProfileRequestDTO
  ): Promise<ExamsInExamProfile> {
    return await prisma.examsInExamProfile.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const examIsValid = await this.findById(id);

      if (!examIsValid)
        throw new Error("O perfil de exame informado não existe!");

      return await prisma.examsInExamProfile.delete({
        where: { id: parseInt(id.toString()) },
      });
    } catch (error) {
      return error;
    }
  }
}
