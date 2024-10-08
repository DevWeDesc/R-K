import { ExamsInPetOnSolicitationsRequestDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";
import ExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";
import CreateExamsWithMaterialInSolicitationUseCase from "./CreateExamsWithMaterialInSolicitationUseCase";
import CreateExamsWithSampleUseCase from "./CreateExamsWithSampleUseCase";

export default class CreateExamsInPetOnSolicitationsUseCase {
  constructor(
    readonly examsInPetRepository: ExamsInPetOnSolicitationsRepository,
    readonly createExamsWithSampleUseCase: CreateExamsWithSampleUseCase,
    readonly createExamsWithMaterialInSolicitationUseCase: CreateExamsWithMaterialInSolicitationUseCase
  ) {}
  async execute(examsInPetRequest: ExamsInPetOnSolicitationsRequestDTO) {
    const examsWithMaterialIds = examsInPetRequest.examsWithMaterial.map(
      (exam) => exam.id
    );

    const examsWithSampleIds = examsInPetRequest.examsWithSamples.map(
      (exam) => exam.id
    );

    const examIdWithoutMaterialAndWithoutSample =
      examsInPetRequest.examsId.filter(
        (id) =>
          !examsWithMaterialIds.find((examId) => examId == id) &&
          !examsWithSampleIds.find((examId) => examId == id)
      );

    const examsCreated = await this.examsInPetRepository.createMany(
      examsInPetRequest.solicitationsId,
      examIdWithoutMaterialAndWithoutSample
    );

    await this.createExamsWithSampleUseCase.execute(
      examsInPetRequest.solicitationsId,
      examsInPetRequest.examsWithSamples
    );

    await this.createExamsWithMaterialInSolicitationUseCase.execute(
      examsInPetRequest.solicitationsId,
      examsInPetRequest.examsWithMaterial
    );

    return examsCreated;
  }
}
