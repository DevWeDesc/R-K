import { Exams } from "@prisma/client";
import { ExamTypeEnum } from "../../enums/ExamTypeEnum";
import { IExamsRepository } from "../../../infra/repositories/Exams/IExamsRepository";

export interface GetExamsPerTypeUseCase {
  execute(typeExam: ExamTypeEnum): Promise<Exams[] | Exams>;
}

export default class GetExamsPerTypeUseCaseImpl
  implements GetExamsPerTypeUseCase
{
  constructor(private readonly examsRepository: IExamsRepository) {}

  public async execute(typeExam: ExamTypeEnum): Promise<Exams[] | Exams> {
    var typeExamIsValid: boolean = false;

    for (const types in ExamTypeEnum) {
      if (types === typeExam) typeExamIsValid = true;
    }

    if (!typeExamIsValid)
      throw new Error("O tipo de exame informado é inválido!");

    return await this.examsRepository.findByTypeExam(typeExam);
  }
}
