import ExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";

export default class GetAllExamsInPetOnSolicitationsUseCase {
  constructor(
    readonly examsInPetRepository: ExamsInPetOnSolicitationsRepository
  ) {}
  async execute() {
    return await this.examsInPetRepository.listAll();
  }
}
