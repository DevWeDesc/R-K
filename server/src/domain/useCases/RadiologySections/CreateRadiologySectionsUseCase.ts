import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";
import { IRadiologySectionsRepository } from "../../../infra/repositories/RadiologySections/IRadiologySectionsRepository";

export default class CreateRadiologySectionsUseCase {
  constructor(
    readonly radiologySectionRepository: IRadiologySectionsRepository
  ) {}
  async execute(
    createRadiologySectionRequestDTO: CreateRadiologySectionRequestDTO[]
  ) {
    for (const radiologySectionRequest of createRadiologySectionRequestDTO) {
      if (radiologySectionRequest.region.length > 0)
        return this.radiologySectionRepository.create(radiologySectionRequest);
    }
  }
}
