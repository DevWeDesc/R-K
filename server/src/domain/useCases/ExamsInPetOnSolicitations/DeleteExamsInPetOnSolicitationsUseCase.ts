import ExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";

export default class DeleteExamsInPetOnSolicitationsUseCase {
  constructor(
    readonly examsInPetOnSolicitationsRepositories: ExamsInPetOnSolicitationsRepository
  ) {}

  public async execute(idExam: number) {
    const examIsValid =
      await this.examsInPetOnSolicitationsRepositories.findById(idExam);

    if (!examIsValid) throw new Error("O Exame do pet informado não é válido!");

    await this.examsInPetOnSolicitationsRepositories.delete(idExam);
    return;
  }
}
