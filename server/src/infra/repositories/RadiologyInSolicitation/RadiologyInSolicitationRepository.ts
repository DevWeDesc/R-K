import { RadiologyInSolicitation } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import { IRadiologyInSolicitationRepository } from "./IRadiologyInSolicitationRepository";
import { CreateRadiologyInSolicitationRequestDTO } from "../../../application/DTOs/RadiologyInSolicitationDTO/CreateRadiologyInSolicitationRequestDTO";

export default class RadiologyInSolicitationRepository
  implements IRadiologyInSolicitationRepository
{
  public async findRadiologyInSolicitationBySolicitationId(
    solicitationId: string
  ): Promise<RadiologyInSolicitation> {
    const radiologyInSolicitationBySolicitationId =
      await prisma.radiologyInSolicitation.findUnique({
        where: { solicitationId },
      });

    if (!radiologyInSolicitationBySolicitationId)
      throw new Error("Essa guia não tem Radiologia!");

    return radiologyInSolicitationBySolicitationId;
  }

  public async update(
    id: number | string,
    entity: CreateRadiologyInSolicitationRequestDTO
  ): Promise<RadiologyInSolicitation> {
    await this.findById(id);

    return await prisma.radiologyInSolicitation.update({
      where: { id: id.toString() },
      data: entity,
    });
  }

  public async findById(
    id: number | string
  ): Promise<RadiologyInSolicitation | null> {
    const radiologyInSolicitationById =
      await prisma.radiologyInSolicitation.findUnique({
        where: { id: id.toString() },
      });

    if (!radiologyInSolicitationById)
      throw new Error("Radiologia da guia não encontrada!");

    return radiologyInSolicitationById;
  }

  public async listAll(
    queryParams: QueryParamsListAllExams
  ): Promise<RadiologyInSolicitation[] | null> {
    return await prisma.radiologyInSolicitation.findMany();
  }

  public async create(
    entity: CreateRadiologyInSolicitationRequestDTO
  ): Promise<RadiologyInSolicitation> {
    const { solicitationId } = entity;
    return await prisma.radiologyInSolicitation.create({
      data: { solicitationId },
    });
  }

  public async RadiologyInSolicitation(
    id: string | number,
    entity: CreateRadiologyInSolicitationRequestDTO
  ): Promise<RadiologyInSolicitation> {
    const { solicitationId } = entity;
    return await prisma.radiologyInSolicitation.update({
      where: { id: id.toString() },
      data: { solicitationId },
    });
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const radiologyInSolicitationIsValid = await this.findById(id);

      if (!radiologyInSolicitationIsValid)
        throw new Error("A radiologia informada não existe!");

      return await prisma.radiologyInSolicitation.delete({
        where: { id: id.toString() },
      });
    } catch (error) {
      return error;
    }
  }
}
