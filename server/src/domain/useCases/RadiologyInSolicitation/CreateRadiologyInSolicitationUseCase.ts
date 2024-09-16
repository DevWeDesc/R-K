import { CreateRadiologyInSolicitationRequestDTO } from "../../../application/DTOs/RadiologyInSolicitationDTO/CreateRadiologyInSolicitationRequestDTO";
import { IRadiologyInSolicitationRepository } from "../../../infra/repositories/RadiologyInSolicitation/IRadiologyInSolicitationRepository";

export default class CreateRadiologyInSolicitationUseCase {
  constructor(
    readonly radiologyInSolicitationRepository: IRadiologyInSolicitationRepository
  ) {}

  public async execute(
    createRadiologyInSolicitationRequestDTO: CreateRadiologyInSolicitationRequestDTO
  ) {
    const radiologyInSolicitationBySolicitationId =
      await this.radiologyInSolicitationRepository.findById(
        createRadiologyInSolicitationRequestDTO.solicitationId
      );

    if (!radiologyInSolicitationBySolicitationId)
      throw new Error("A solicitação já tem a sessão radiologia");

    return await this.radiologyInSolicitationRepository.create(
      createRadiologyInSolicitationRequestDTO
    );
  }
}
