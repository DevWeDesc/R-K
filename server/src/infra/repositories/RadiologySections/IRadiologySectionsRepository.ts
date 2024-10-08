import { RadiologySections, TypeOfRadiologySection } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";

export interface IRadiologySectionsRepository
  extends IGenericRepository<
    CreateRadiologySectionRequestDTO,
    RadiologySections
  > {
  findByRadiologySectionsType(
    typeOfRadiologySection: TypeOfRadiologySection
  ): Promise<RadiologySections[] | RadiologySections>;

  findFirstRadiologySectionBySolicitationIdAndTypeSection(
    radiologyInSolicitationId: string,
    typeOfRadiologySection: TypeOfRadiologySection
  ): Promise<RadiologySections | null>;
  // createMany(entity: CreateRadiologySectionRequestDTO): Promise<any>;
}
