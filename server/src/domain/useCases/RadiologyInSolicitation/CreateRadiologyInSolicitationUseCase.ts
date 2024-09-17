import { CreateRadiologyInSolicitationRequestDTO } from "../../../application/DTOs/RadiologyInSolicitationDTO/CreateRadiologyInSolicitationRequestDTO";
import { IRadiologyInSolicitationRepository } from "../../../infra/repositories/RadiologyInSolicitation/IRadiologyInSolicitationRepository";
import { ISolicitationsRepository } from "../../../infra/repositories/Solicitations/ISolicitationsRepository";

export default class CreateRadiologyInSolicitationUseCase {
  constructor(
    readonly radiologyInSolicitationRepository: IRadiologyInSolicitationRepository,
    readonly solicitationRepository: ISolicitationsRepository
  ) {}

  public async execute(
    createRadiologyInSolicitationRequestDTO: CreateRadiologyInSolicitationRequestDTO
  ) {
    const solicitationBySolicitationId =
      await this.solicitationRepository.findById(
        createRadiologyInSolicitationRequestDTO.solicitationId
      );

    if (!solicitationBySolicitationId)
      throw new Error("A solicitação informada é inválida!");

    const radiologyBySolicitationId =
      await this.radiologyInSolicitationRepository.findRadiologyInSolicitationBySolicitationId(
        createRadiologyInSolicitationRequestDTO.solicitationId
      );

    if (radiologyBySolicitationId)
      throw new Error(
        "A solicitação informada já tem o setor de radiologia atrelado!"
      );

    return await this.radiologyInSolicitationRepository.create(
      createRadiologyInSolicitationRequestDTO
    );
  }
}
