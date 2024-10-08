import { CreateManyExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationRequestDTO";
import { CreateExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import ExamsProfileInSolicitationRepository from "../../../infra/repositories/ExamsProfileInSolicitation/ExamsProfileInSolicitationRepository";
import { IExamsProfileInSolicitationRepository } from "../../../infra/repositories/ExamsProfileInSolicitation/IExamsProfileInSolicitationRepository";
import GetUniqueExamProfileUseCase from "../ExamsProfile/GetUniqueExamProfileUseCase";

export default class CreateExamsProfileInSolicitationUseCase {
  constructor(
    private readonly examProfileInSolicitationRepository: IExamsProfileInSolicitationRepository,
    private readonly getUniqueExamProfileUseCase: GetUniqueExamProfileUseCase
  ) {}

  public async execute(
    examProfileRequest: CreateManyExamsProfileInSolicitationRequestDTO
  ) {
    try {
      const validatedExamProfiles: string[] = [];

      for (const examProfileId of examProfileRequest.examProfileId) {
        const examProfileExists =
          await this.getUniqueExamProfileUseCase.execute(examProfileId);

        if (examProfileExists) validatedExamProfiles.push(examProfileId);
      }

      for (const examProfileId of validatedExamProfiles) {
        const dataRequest: CreateExamsProfileInSolicitationRequestDTO = {
          solicitationsId: examProfileRequest.solicitationsId,
          examProfileId: examProfileId,
        };

        await this.examProfileInSolicitationRepository.create(dataRequest);
      }

      return { message: "Perfis de exames adicionados a guia com sucesso!" };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
