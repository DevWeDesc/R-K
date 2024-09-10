import { IExamsProfileInSolicitationRepository } from "./IExamsProfileInSolicitationRepository";
import { ExamsProfileInSolicitation } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { CreateExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import { CreateManyExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationRequestDTO";
import { CreateManyExamsProfileInSolicitationResponseDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationResponseDTO";

export default class ExamsProfileInSolicitationRepository
  implements IExamsProfileInSolicitationRepository
{
  constructor() {}
  public async findByExamProfileId(
    examProfileId: string
  ): Promise<ExamsProfileInSolicitation[]> {
    return await prisma.examsProfileInSolicitation.findMany({
      where: { examProfileId: examProfileId },
    });
  }
  public async update(
    id: number | string,
    entity: CreateExamsProfileInSolicitationRequestDTO
  ): Promise<ExamsProfileInSolicitation> {
    return await prisma.examsProfileInSolicitation.update({
      where: { id: id.toString() },
      data: entity,
    });
  }

  public async findById(
    id: number | string
  ): Promise<ExamsProfileInSolicitation | null> {
    return await prisma.examsProfileInSolicitation.findUnique({
      where: { id: id.toString() },
    });
  }
  public async listAll(
    queryStrings: any
  ): Promise<ExamsProfileInSolicitation[] | null> {
    return await prisma.examsProfileInSolicitation.findMany();
  }
  public async create(
    entity: CreateExamsProfileInSolicitationRequestDTO
  ): Promise<ExamsProfileInSolicitation> {
    const existingExamProfile = await prisma.examsProfile.findUnique({
      where: { id: entity.examProfileId },
    });

    if (!existingExamProfile) {
      throw new Error(`Perfil de exame ${entity.examProfileId} não existe!`);
    }

    return await prisma.examsProfileInSolicitation.create({ data: entity });
  }
  public async delete(id: number | string): Promise<boolean> {
    try {
      await prisma.examsProfileInSolicitation.delete({
        where: { id: id.toString() },
      });
      return true;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
