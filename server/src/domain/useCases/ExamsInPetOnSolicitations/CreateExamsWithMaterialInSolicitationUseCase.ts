import { IExamsWithMaterialInSolicitation } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";
import IExamsInPetOnSolicitationsRepository from "../../../infra/repositories/ExamsInPetOnSolicitations/IExamsInPetOnSolicitationsRepository";

export default class CreateExamsWithMaterialInSolicitationUseCase {
  constructor(
    readonly examsInSolicitationRepository: IExamsInPetOnSolicitationsRepository
  ) {}
  async execute(
    solicitationId: string,
    examsWithMaterialRequestDTO: IExamsWithMaterialInSolicitation[]
  ) {
    for (const examWithMaterial of examsWithMaterialRequestDTO) {
      await this.examsInSolicitationRepository.createExamsWithMaterial(
        solicitationId,
        examWithMaterial
      );
    }

    return { message: "Exames com materiais criados com sucesso!" };
  }
}
