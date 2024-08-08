import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";
import { IExamsRepository } from "../../../infra/repositories/Exams/IExamsRepository";
import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class CreateExamsInExamProfileUseCase {
  constructor(
    private readonly examsInExamProfileRepository: IExamsInExamProfileRepository,
    private readonly examsProfileRepository: IExamsProfileRepository,
    private readonly examsRepository: IExamsRepository
  ) {}

  async execute(examRequest: ExamsInExamProfileRequestDTO) {
    const { examsId, examsProfileId } = examRequest;

    const validateExamsProfileExists =
      await this.examsProfileRepository.findById(examsProfileId);
    if (!validateExamsProfileExists)
      throw new Error("O perfil selecionado não existe!");

    const validateExamExists = await this.examsRepository.findById(examsId);
    if (!validateExamExists) throw new Error("O exame selecionado não existe!");

    try {
      const examsProfileCreated =
        await this.examsInExamProfileRepository.create(examRequest);

      return examsProfileCreated;
    } catch (error: any) {
      if (error.message.includes("já existe")) {
        throw new Error("A relação entre o exame e o perfil já existe.");
      }
      throw error;
    }
  }
}

// import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";
// import { IExamsRepository } from "../../../infra/repositories/Exams/IExamsRepository";
// import ExamsInExamProfileRepository from "../../../infra/repositories/ExamsInExamProfile/ExamsInExamProfileRepository";
// import { IExamsInExamProfileRepository } from "../../../infra/repositories/ExamsInExamProfile/IExamsInExamProfileRepository";
// import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

// export default class CreateExamsInExamProfileUseCase {
//   constructor(
//     private readonly examsInExamProfileRepository: IExamsInExamProfileRepository,
//     private readonly examsProfileRepository: IExamsProfileRepository,
//     private readonly examsRepository: IExamsRepository
//   ) {}

//   async execute(examRequest: ExamsInExamProfileRequestDTO) {
//     const { examsId, examsProfileId } = examRequest;

//     const validateExamsProfileExists =
//       await this.examsProfileRepository.findById(examsProfileId);
//     if (!validateExamsProfileExists)
//       throw new Error("O perfil selecionado não existe!");

//     const validateExamExists = await this.examsRepository.findById(examsId);
//     if (!validateExamExists) throw new Error("O exame selecionado não existe!");

//     const examsProfileCreated = await this.examsInExamProfileRepository.create(
//       examRequest
//     );

//     return examsProfileCreated;
//   }
// }
