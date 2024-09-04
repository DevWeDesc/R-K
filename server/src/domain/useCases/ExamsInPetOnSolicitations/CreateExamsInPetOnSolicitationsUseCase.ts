import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import { ExamsInPetOnSolicitationsRequestDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";
import ExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";

export default class CreateExamsInPetOnSolicitationsUseCase {
  constructor(
    readonly examsInPetRepository: ExamsInPetOnSolicitationsRepository
  ) {}
  async execute(examsInPetRequest: ExamsInPetOnSolicitationsRequestDTO) {
    return await this.examsInPetRepository.createMany(
      examsInPetRequest.solicitationsId,
      examsInPetRequest.examsId
    );
  }
}
