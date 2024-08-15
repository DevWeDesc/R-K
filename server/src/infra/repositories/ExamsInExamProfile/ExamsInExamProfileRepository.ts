import { Exams, ExamsInExamProfile } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IExamsInExamProfileRepository } from "./IExamsInExamProfileRepository";
import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";

export default class ExamsInExamProfileRepository
  implements IExamsInExamProfileRepository
{
  public async findByProfileId(
    idProfile: string
  ): Promise<ExamsInExamProfile[]> {
    return await prisma.examsInExamProfile.findMany({
      where: { examsProfileId: idProfile },
      include: { Exams: true },
    });
  }

  public async findById(
    id: string | number
  ): Promise<ExamsInExamProfile | null> {
    return await prisma.examsInExamProfile.findUnique({
      where: { id: id.toString() },
    });
  }

  public async listAll(): Promise<ExamsInExamProfile[] | null> {
    return await prisma.examsInExamProfile.findMany({
      include: { ExamsProfile: true, Exams: true },
    });
  }

  public async create(
    entity: ExamsInExamProfileRequestDTO
  ): Promise<ExamsInExamProfile> {
    try {
      const { examsId, examsProfileId } = entity;

      return prisma.$transaction(async (tx) => {
        const validateExamExists = await tx.exams.findUnique({
          where: { id: examsId },
          include: { ExamsInExamProfile: true },
        });
        if (!validateExamExists)
          throw new Error(`O exame informado não existe!`);

        const validateProfileExists = await tx.examsProfile.findUnique({
          where: { id: examsProfileId },
          include: {
            examsInExamProfile: {
              include: { Exams: { select: { id: true } } },
            },
          },
        });
        if (!validateProfileExists)
          throw new Error(`O perfil informado não existe!`);

        const validateExamExistsInProfile =
          validateProfileExists.examsInExamProfile.find(
            (data) => data.examsId === examsId
          );
        if (validateExamExistsInProfile)
          throw new Error("O exame já existe nesse perfil!");

        const examsInExamProfileCreated = await tx.examsInExamProfile.create({
          data: entity,
        });

        return examsInExamProfileCreated;
      });
    } catch (error) {
      throw new Error(error as any);
    }
  }

  public async update(
    id: string | number,
    entity: ExamsInExamProfileRequestDTO
  ): Promise<ExamsInExamProfile> {
    return await prisma.examsInExamProfile.update({
      where: { id: id.toString() },
      data: entity,
    });
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const examIsValid = await this.findById(id);

      if (!examIsValid)
        throw new Error("O perfil de exame informado não existe!");

      return await prisma.examsInExamProfile.delete({
        where: { id: id.toString() },
      });
    } catch (error) {
      return error;
    }
  }
}
