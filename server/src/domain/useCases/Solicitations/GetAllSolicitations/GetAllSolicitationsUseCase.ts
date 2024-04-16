import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";

export class GetAllSolicitationsUseCase {
  constructor(readonly solicitationsRepository: SolicitationsRepository) {}
  async execute() {
    return await this.solicitationsRepository.listAll();
  }
}
