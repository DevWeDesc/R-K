import { ExamsInPetOnSolicitationsDTO } from "../../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import ExamsInPetOnSolicitationsRepository from "../../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";

export class AddExamInSolicitationUseCase {
  constructor(
    readonly examsInPetOnSolicitationsRepository: ExamsInPetOnSolicitationsRepository
  ) {}
  async exeute(examsInPetRequest: ExamsInPetOnSolicitationsDTO) {
    this.examsInPetOnSolicitationsRepository.create(examsInPetRequest);
  }
}
