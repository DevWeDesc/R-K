import { RadiologySections, TypeOfRadiologySection } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import { IRadiologySectionsRepository } from "./IRadiologySectionsRepository";
import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";
import { IRadiologyInSolicitationRepository } from "../RadiologyInSolicitation/IRadiologyInSolicitationRepository";

export default class RadiologySectionsRepository
  implements IRadiologySectionsRepository
{
  constructor(
    readonly radiologyInSolicitationRepository: IRadiologyInSolicitationRepository
  ) {}
  public async findFirstRadiologySectionBySolicitationIdAndTypeSection(
    radiologyInSolicitationId: string,
    typeOfRadiologySection: TypeOfRadiologySection
  ): Promise<RadiologySections | null> {
    return await prisma.radiologySections.findFirst({
      where: {
        radiologyInSolicitationId: radiologyInSolicitationId,
        typeOfRadiologySection: typeOfRadiologySection,
      },
    });
  }
  public async findByRadiologySectionsType(
    typeOfRadiologySection: TypeOfRadiologySection
  ): Promise<RadiologySections[] | RadiologySections> {
    return await prisma.radiologySections.findMany({
      where: { typeOfRadiologySection },
    });
  }

  // public async createMany(
  //   entity: CreateRadiologySectionRequestDTO
  // ): Promise<any> {
  //   const radiologyInSolicitationBySolicitationId =
  //     await this.radiologyInSolicitationRepository.findRadiologyInSolicitationBySolicitationId(
  //       entity.solicitationId
  //     );

  //   if (!radiologyInSolicitationBySolicitationId)
  //     throw new Error("Solicitação inválida!");

  //   const radiologyCreated = await prisma.radiologySections.create({
  //     data: {
  //       typeOfRadiologySection: entity.typeOfRadiologySection,
  //       articulation: entity.articulation,
  //       clinicalSuspicion: entity.clinicalSuspicion,
  //       observation: entity.observation,
  //       region: entity.region,
  //       sedated: entity.sedated,
  //       side: entity.side,
  //       radiologyInSolicitationId: radiologyInSolicitationBySolicitationId.id,
  //     },
  //   });

  //   return radiologyCreated;
  // }

  public async findById(
    id: string | number
  ): Promise<RadiologySections | null> {
    return await prisma.radiologySections.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }

  public async listAll(
    queryParams: QueryParamsListAllExams
  ): Promise<RadiologySections[] | null> {
    return await prisma.radiologySections.findMany();
  }

  public async create(
    entity: CreateRadiologySectionRequestDTO
  ): Promise<RadiologySections> {
    const radiologyInSolicitationBySolicitationId =
      await this.radiologyInSolicitationRepository.findRadiologyInSolicitationBySolicitationId(
        entity.solicitationId
      );

    if (!radiologyInSolicitationBySolicitationId)
      throw new Error("Não tem sessão radiologia na solicitação informada!");

    const radiologyCreated = await prisma.radiologySections.create({
      data: {
        typeOfRadiologySection: entity.typeOfRadiologySection,
        articulation: entity.articulation,
        clinicalSuspicion: entity.clinicalSuspicion,
        observation: entity.observation,
        region: entity.region,
        sedated: entity.sedated,
        side: entity.side,
        radiologyInSolicitationId: radiologyInSolicitationBySolicitationId.id,
      },
    });

    return radiologyCreated;
  }

  public async update(
    id: string | number,
    entity: CreateRadiologySectionRequestDTO
  ): Promise<RadiologySections> {
    const radiologyInSolicitationBySolicitationId =
      await this.radiologyInSolicitationRepository.findRadiologyInSolicitationBySolicitationId(
        entity.solicitationId
      );

    if (!radiologyInSolicitationBySolicitationId)
      throw new Error("Não tem sessão radiologia na solicitação informada!");

    const radiologySectionBySolicitationId =
      await this.findFirstRadiologySectionBySolicitationIdAndTypeSection(
        radiologyInSolicitationBySolicitationId?.id,
        entity.typeOfRadiologySection
      );

    const radiologyCreated = await prisma.radiologySections.update({
      where: {
        id: radiologySectionBySolicitationId?.id,
        radiologyInSolicitationId: radiologyInSolicitationBySolicitationId.id,
        typeOfRadiologySection: entity.typeOfRadiologySection,
      },
      data: {
        typeOfRadiologySection: entity.typeOfRadiologySection,
        articulation: entity.articulation,
        clinicalSuspicion: entity.clinicalSuspicion,
        observation: entity.observation,
        region: entity.region,
        sedated: entity.sedated,
        side: entity.side,
        radiologyInSolicitationId: radiologyInSolicitationBySolicitationId.id,
      },
    });

    return radiologyCreated;
  }

  public async delete(id: string | number): Promise<any> {
    try {
      const radiologySectionIsValid = await this.findById(id);

      if (!radiologySectionIsValid)
        throw new Error("O exame informado não existe!");

      return await prisma.radiologySections.delete({
        where: { id: parseInt(id.toString()) },
      });
    } catch (error) {
      return error;
    }
  }
}
