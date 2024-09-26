import { PatologyInSolicitation } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IPatologyInSolicitationRepository } from "./IPatologyInSolicitationRepository";
import { PatologyInSolicitationRequestDTO } from "../../../application/DTOs/PatologyInSolicitationDTO/PatologyInSolicitationRequestDTO";

export default class PatologyInSolicitationRepository
  implements IPatologyInSolicitationRepository
{
  public async update(
    id: string | number,
    entity: PatologyInSolicitationRequestDTO
  ): Promise<PatologyInSolicitation> {
    const patologyInSolicitationUpdated =
      await prisma.patologyInSolicitation.update({
        where: { id: id.toString() },
        data: entity,
      });
    return patologyInSolicitationUpdated;
  }
  public async findById(
    id: string | number
  ): Promise<PatologyInSolicitation | null> {
    return await prisma.patologyInSolicitation.findUnique({
      where: { id: id.toString() },
    });
  }
  public async listAll(): Promise<PatologyInSolicitation[] | null> {
    return await prisma.patologyInSolicitation.findMany();
  }
  public async create(
    entity: PatologyInSolicitationRequestDTO
  ): Promise<PatologyInSolicitation> {
    const patologyInSolicitationCreated =
      await prisma.patologyInSolicitation.create({
        data: entity,
      });
    return patologyInSolicitationCreated;
  }
  public async delete(id: string | number): Promise<boolean> {
    await prisma.patologyInSolicitation.delete({
      where: { id: id.toString() },
    });
    return true;
  }
}
