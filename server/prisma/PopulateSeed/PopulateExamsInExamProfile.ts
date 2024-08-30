import { CreateManyExamsInExamsProfileRequestDTO } from "../../src/application/DTOs/ExamsInExamProfile/CreateManyExamsInExamsProfileRequestDTO";
import CreateManyExamsInExamsProfileUseCase from "../../src/domain/useCases/ExamsInExamProfile/CreateManyExamsInExamsProfileUseCase";

export default class PopulateExamsInExamProfile {
  constructor(
    readonly createManyExamsInExamsProfileUseCase: CreateManyExamsInExamsProfileUseCase
  ) {}

  public execute = async (
    dataExamProfiles: CreateManyExamsInExamsProfileRequestDTO[]
  ) => {
    for (const profile of dataExamProfiles) {
      await this.createManyExamsInExamsProfileUseCase.execute(profile);
    }
  };
}
