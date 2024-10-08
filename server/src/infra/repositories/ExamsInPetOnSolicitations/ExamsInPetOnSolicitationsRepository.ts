import { ExamsInPetOnSolicitations } from "@prisma/client";
import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import IExamsInPetOnSolicitationsRepository from "./IExamsInPetOnSolicitationsRepository";
import { prisma } from "../../../lib/prismaClient";
import {
  IExamsWithMaterialInSolicitation,
  IExamsWithSamples,
} from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";

export default class ExamsInPetOnSolicitationsRepository
  implements IExamsInPetOnSolicitationsRepository
{
  public async createExamsWithSample(
    solicitationId: string,
    entity: IExamsWithSamples
  ): Promise<any> {
    const { id, samples } = entity;
    return await prisma.examsInPetOnSolicitations.create({
      data: { examsId: id, samples, solicitationsId: solicitationId },
    });
  }
  public async createExamsWithMaterial(
    solicitationId: string,
    entity: IExamsWithMaterialInSolicitation
  ): Promise<any> {
    const { id, material } = entity;
    return await prisma.examsInPetOnSolicitations.create({
      data: { examsId: id, material, solicitationsId: solicitationId },
    });
  }

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
    entity: { material: string }
  ): Promise<ExamsInPetOnSolicitations> {
    const { material } = entity;
    await this.findById(id);

    return await prisma.examsInPetOnSolicitations.update({
      where: { id: parseInt(id.toString()) },
      data: { material },
    });
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
