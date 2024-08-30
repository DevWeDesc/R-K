import ExamsInExamProfileRepository from "../../../infra/repositories/ExamsInExamProfile/ExamsInExamProfileRepository";
import ExamsProfileRepository from "../../../infra/repositories/ExamsProfile/ExamsProfileRepository";
import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";
import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";
import { CreateManyExamsInExamsProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/CreateManyExamsInExamsProfileRequestDTO";

export default class CreateManyExamsInExamsProfileUseCase {
  constructor(
    readonly examsInExamsProfileRepository: ExamsInExamProfileRepository,
    readonly examsProfileRepository: ExamsProfileRepository,
    readonly examsRepository: ExamsRepository
  ) {}
  async execute(requestDTO: CreateManyExamsInExamsProfileRequestDTO) {
    let profileByName = await this.examsProfileRepository.findByName(
      requestDTO.nameProfile
    );

    if (!profileByName)
      profileByName = await this.examsProfileRepository.create({
        name: requestDTO.nameProfile,
      });

    await this.examsRepository.createMany(requestDTO.exams);

    for (const exam of requestDTO.exams) {
      const examByName = await this.examsRepository.findByName(exam);
      if (!examByName) throw new Error("Exame inválido!");

      const dataRequest: ExamsInExamProfileRequestDTO = {
        examsId: examByName?.id,
        examsProfileId: profileByName?.id,
      };
      await this.examsInExamsProfileRepository.create(dataRequest);
    }
  }
}
