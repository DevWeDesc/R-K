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
      for (const examProfileId of examProfileRequest.examProfileId) {
        const dataRequest: CreateExamsProfileInSolicitationRequestDTO = {
          examProfileId: examProfileId,
          solicitationsId: examProfileRequest.solicitationsId,
        };

        const examsProfileSolicitationsById =
          await this.examProfileInSolicitationRepository.findByExamProfileId(
            examProfileId
          );

        if (!examsProfileSolicitationsById) {
          const examProfileExists =
            await this.getUniqueExamProfileUseCase.execute(examProfileId);

          if (!examProfileExists)
            throw new Error(
              `Perfil de exame com ID ${examProfileId} não existe!`
            );

          await this.examProfileInSolicitationRepository.create(dataRequest);
        }
      }

      return { message: "Perfis de exames adicionados a guia com sucesso!" };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
