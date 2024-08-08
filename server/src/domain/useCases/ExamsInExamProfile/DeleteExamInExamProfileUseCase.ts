import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class DeleteExamInExamProfileUseCase {
  constructor(
    readonly examsInExamProfileRepository: IExamsInExamProfileRepository
  ) {}

  public async execute(idExam: number) {
    return await this.examsInExamProfileRepository.delete(idExam);
  }
}
