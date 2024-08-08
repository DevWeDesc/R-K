import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class DeleteExamProfileUseCase {
  constructor(readonly examProfileRepository: IExamsProfileRepository) {}

  public async execute(idExam: number) {
    return await this.examProfileRepository.delete(idExam);
  }
}
