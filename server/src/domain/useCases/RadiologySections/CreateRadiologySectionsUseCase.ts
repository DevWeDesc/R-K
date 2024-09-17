import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";
import { IRadiologySectionsRepository } from "../../../infra/repositories/RadiologySections/IRadiologySectionsRepository";

export default class CreateRadiologySectionsUseCase {
  constructor(
    readonly radiologySectionRepository: IRadiologySectionsRepository
  ) {}
  async execute(
    createRadiologySectionRequestDTO: CreateRadiologySectionRequestDTO
  ) {
    return this.radiologySectionRepository.create(
      createRadiologySectionRequestDTO
    );
  }
}
