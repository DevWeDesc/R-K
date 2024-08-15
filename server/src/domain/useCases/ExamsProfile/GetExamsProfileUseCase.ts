import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class GetExamsProfileUseCase {
  constructor(readonly examsProfileRepository: IExamsProfileRepository) {}
  async execute() {
    return await this.examsProfileRepository.listAll(null);
  }
}
