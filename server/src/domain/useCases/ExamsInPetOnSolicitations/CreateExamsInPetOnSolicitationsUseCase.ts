import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import ExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";

export default class CreateExamsInPetOnSolicitationsUseCase {
  constructor(
    readonly examsInPetRepository: ExamsInPetOnSolicitationsRepository
  ) {}
  async execute(examsInPetRequest: ExamsInPetOnSolicitationsDTO) {
    return await this.examsInPetRepository.create(examsInPetRequest);
  }
}
