import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";
import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";
import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";

export default class UpdateExamInExamProfileUseCase {
  constructor(
    readonly examsInExamProfileRepository: IExamsInExamProfileRepository
  ) {}

  public async execute(
    idExamProfile: number,
    examProfileRequest: ExamsInExamProfileRequestDTO
  ) {
    const idExamProfileIsValid =
      await this.examsInExamProfileRepository.findById(idExamProfile);

    if (!idExamProfileIsValid) throw new Error("Perfil de exame inválido!");

    const { examsId, examsProfileId } = examProfileRequest;

    await this.examsInExamProfileRepository.update(idExamProfile, {
      examsId,
      examsProfileId,
    });

    return { message: "Exame do perfil de exame atualizado com sucesso!" };
  }
}
