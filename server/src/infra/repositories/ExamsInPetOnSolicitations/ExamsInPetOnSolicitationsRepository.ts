import { ExamsInPetOnSolicitations } from "@prisma/client";
import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import IExamsInPetOnSolicitationsRepository from "./IExamsInPetOnSolicitationsRepository";
import { prisma } from "../../../lib/prismaClient";

export default class ExamsInPetOnSolicitationsRepository
  implements IExamsInPetOnSolicitationsRepository
{
  public async createMany(
    solicitationId: string,
    examsId: number[]
  ): Promise<any> {
    examsId.forEach(async (exam) => {
      await prisma.examsInPetOnSolicitations.create({
        data: {
          examsId: parseInt(exam.toString()),
          solicitationsId: solicitationId,
        },
      });
    });

    return { message: "Exames criados com sucesso!" };
  }

  public async update(
    id: string | number,
    entity: ExamsInPetOnSolicitationsDTO
  ): Promise<ExamsInPetOnSolicitations> {
    throw new Error("Method not implemented.");
  }
  public async findById(
    id: string | number
  ): Promise<ExamsInPetOnSolicitations | null> {
    return await prisma.examsInPetOnSolicitations.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }
  public async listAll(): Promise<ExamsInPetOnSolicitations[] | null> {
    return await prisma.examsInPetOnSolicitations.findMany({
      include: { Exams: true, Solicitations: true },
    });
  }
  public async create(
    entity: ExamsInPetOnSolicitationsDTO
  ): Promise<ExamsInPetOnSolicitations> {
    return await prisma.examsInPetOnSolicitations.create({ data: entity });
  }
  public async delete(id: string | number): Promise<boolean> {
    try {
      await prisma.examsInPetOnSolicitations.delete({
        where: { id: parseInt(id.toString()) },
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
