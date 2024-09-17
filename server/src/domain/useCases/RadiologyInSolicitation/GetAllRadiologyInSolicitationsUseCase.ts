import { IRadiologyInSolicitationRepository } from "../../../infra/repositories/RadiologyInSolicitation/IRadiologyInSolicitationRepository";

export default class GetAllRadiologyInSolicitationsUseCase {
  constructor(
    readonly radiologyInSolicitationRepository: IRadiologyInSolicitationRepository
  ) {}

  public async execute() {
    return await this.radiologyInSolicitationRepository.listAll(null);
  }
}
