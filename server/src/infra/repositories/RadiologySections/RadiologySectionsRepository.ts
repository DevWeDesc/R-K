import { RadiologySections, TypeOfRadiologySection } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import { IRadiologySectionsRepository } from "./IRadiologySectionsRepository";
import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";

export default class RadiologySectionsRepository
  implements IRadiologySectionsRepository
{
  public async findByRadiologySectionsType(
    typeOfRadiologySection: TypeOfRadiologySection
  ): Promise<RadiologySections[] | RadiologySections> {
    return await prisma.radiologySections.findMany({
      where: { typeOfRadiologySection },
    });
  }

  public async createMany(
    entity: CreateRadiologySectionRequestDTO[]
  ): Promise<any> {
    const examsArrayFiltered: CreateRadiologySectionRequestDTO[] = [];
    for (const radiologySection of entity) {
      const data: CreateRadiologySectionRequestDTO = {
        articulation: [""],
        region: [""],
        side: [""],
        typeOfRadiologySection: "Skull",
      };
    }
    const radiologyCreated = await prisma.radiologySections.createMany({
      data: examsArrayFiltered,
    });

    return radiologyCreated;
  }

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
    return await prisma.radiologySections.create({
      data: entity,
    });
  }

  public async update(
    id: string | number,
    entity: CreateRadiologySectionRequestDTO
  ): Promise<RadiologySections> {
    return await prisma.radiologySections.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });
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
