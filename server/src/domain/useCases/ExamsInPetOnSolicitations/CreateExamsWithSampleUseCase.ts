import { IExamsWithSamples } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";
import IExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/IExamsInPetOnSolicitationsRepository";

export default class CreateExamsWithSampleUseCase {
  constructor(
    readonly examsInSolicitationRepositry: IExamsInPetOnSolicitationsRepository
  ) {}
  async execute(
    solicitationId: string,
    examsWithSampleRequestDTO: IExamsWithSamples[]
  ) {
    for (const examSample of examsWithSampleRequestDTO)
      await this.examsInSolicitationRepositry.createExamsWithSample(
        solicitationId,
        examSample
      );

    return { message: "Exames com amostras salvos com sucesso!" };
  }
}
