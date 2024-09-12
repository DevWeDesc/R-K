import { CreateManyExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationRequestDTO";
import { CreateExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import ExamsProfileInSolicitationRepository from "../../../infra/repositories/ExamsProfileInSolicitation/ExamsProfileInSolicitationRepository";
import GetUniqueExamProfileUseCase from "../ExamsProfile/GetUniqueExamProfileUseCase";

export default class CreateExamsProfileInSolicitationUseCase {
  constructor(
    private readonly examProfileInSolicitationRepository: ExamsProfileInSolicitationRepository,
    private readonly getUniqueExamProfileUseCase: GetUniqueExamProfileUseCase
  ) {}

  public async execute(
    examProfileRequest: CreateManyExamsProfileInSolicitationRequestDTO
  ) {
    try {
      for (const examProfileId of examProfileRequest.examProfileId) {
        const examsProfileSolicitationsById =
          await this.examProfileInSolicitationRepository.findByExamProfileId(
            examProfileId
          );

        const dataRequest: CreateExamsProfileInSolicitationRequestDTO = {
          examProfileId,
          solicitationsId: examProfileRequest.solicitationsId,
        };

        if (examsProfileSolicitationsById.length === 0)
          await this.examProfileInSolicitationRepository.create(dataRequest);
      }

      return { message: "Perfis de exames adicionados a guia com sucesso!" };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
