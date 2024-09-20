import { CreateRadiologySectionRequestDTO } from "../../../application/DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";
import { IRadiologySectionsRepository } from "../../../infra/repositories/RadiologySections/IRadiologySectionsRepository";

export default class CreateRadiologySectionsUseCase {
  constructor(
    readonly radiologySectionRepository: IRadiologySectionsRepository
  ) {}
  async execute(
    createRadiologySectionRequestDTO: CreateRadiologySectionRequestDTO[]
  ) {
    console.log(createRadiologySectionRequestDTO);
    for (const radiologySectionRequest of createRadiologySectionRequestDTO) {
      await this.radiologySectionRepository.create(radiologySectionRequest);
    }
    return { message: "Sessões de radiologia criadas!" };
  }
}
