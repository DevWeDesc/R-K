import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class DeleteExamUseCase {
  constructor(readonly examRepository: ExamsRepository) {}

  public async execute(idExam: number) {
    const idExamIsValid = await this.examRepository.findById(idExam);

    if (!idExamIsValid) throw new Error("O exame informado não existe!");

    return await this.examRepository.delete(idExam);
  }
}
