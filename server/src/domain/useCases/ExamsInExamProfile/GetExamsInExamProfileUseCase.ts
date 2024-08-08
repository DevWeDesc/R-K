import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class GetExamsInExamProfileUseCase {
  constructor(
    readonly examsInExamProfileRepository: IExamsInExamProfileRepository
  ) {}
  async execute() {
    return await this.examsInExamProfileRepository.listAll(null);
  }
}
