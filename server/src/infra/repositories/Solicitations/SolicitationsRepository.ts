import { Solicitations } from "@prisma/client";
import { SolicitationRequestDTO } from "../../../application/DTOs/SolicitationsDTO/SolicitationRequestDTO";
import { ISolicitationsRepository } from "./ISolicitationsRepository";
import { prisma } from "../../../lib/prismaClient";
import { FinishedSolicitationDTO } from "../../../application/DTOs/SolicitationsDTO/FinishedSolicitationDTO";

export default class SolicitationsRepository
  implements ISolicitationsRepository
{
  public async update(
    id: string | number,
    entity: FinishedSolicitationDTO
  ): Promise<Solicitations> {
    return await prisma.solicitations.update({
      where: { id: id.toString() },
      data: entity,
    });
  }
  public async findById(id: string | number): Promise<Solicitations | null> {
    return await prisma.solicitations.findUnique({
      where: { id: id.toString() },
      include: {
        pet: { include: { customer: true } },
        veterinarians: true,
        exams: { include: { Exams: true } },
      },
    });
  }
  public async listAll(): Promise<Solicitations[] | null> {
    return await prisma.solicitations.findMany({
      include: {
        veterinarians: true,
        pet: true,
      },
    });
  }

  public async create(entity: SolicitationRequestDTO): Promise<Solicitations> {
    return await prisma.solicitations.create({ data: entity });
  }

  public async delete(id: string | number): Promise<boolean> {
    await prisma.solicitations.delete({ where: { id: id.toString() } });
    return true;
  }
}
