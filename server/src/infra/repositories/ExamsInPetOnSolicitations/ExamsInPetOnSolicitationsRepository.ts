import { ExamsInPetOnSolicitations } from "@prisma/client";
import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import IExamsInPetOnSolicitationsRepository from "./IExamsInPetOnSolicitationsRepository";
import { prisma } from "../../../lib/prismaClient";

export default class ExamsInPetOnSolicitationsRepository
  implements IExamsInPetOnSolicitationsRepository
{
  public async update(
    id: string | number,
    entity: ExamsInPetOnSolicitationsDTO
  ): Promise<ExamsInPetOnSolicitations> {
    throw new Error("Method not implemented.");
  }
  public async findById(
    id: string | number
  ): Promise<ExamsInPetOnSolicitations | null> {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
}
