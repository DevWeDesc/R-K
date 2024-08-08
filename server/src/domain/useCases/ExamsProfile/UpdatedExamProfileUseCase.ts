import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class UpdateExamProfileUseCase {
  constructor(readonly examsProfileRepository: IExamsProfileRepository) {}

  public async execute(
    idExamProfile: number,
    examProfileRequest: ExamsProfileRequestDTO
  ) {
    const idExamProfileIsValid = await this.examsProfileRepository.findById(
      idExamProfile
    );

    if (!idExamProfileIsValid) throw new Error("Perfil de exame inválido!");

    const { name } = examProfileRequest;

    await this.examsProfileRepository.update(idExamProfile, {
      name,
    });

    return { message: "Perfil de exame atualizado com sucesso!" };
  }
}
