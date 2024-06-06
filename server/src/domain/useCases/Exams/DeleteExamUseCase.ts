import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class DeleteExamUseCase {
  constructor(readonly examRepository: ExamsRepository) {}

  public async execute(idExam: number) {
    return await this.examRepository.delete(idExam);
  }
}
