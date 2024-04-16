import { SolicitationRequestDTO } from "../../../../application/DTOs/SolicitationsDTO/SolicitationRequestDTO";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";

export default class CreateSolicitationsUseCase {
  constructor(readonly solicitationsRepository: SolicitationsRepository) {}
  async execute(solicitationRequest: SolicitationRequestDTO) {
    return await this.solicitationsRepository.create(solicitationRequest);
  }
}
