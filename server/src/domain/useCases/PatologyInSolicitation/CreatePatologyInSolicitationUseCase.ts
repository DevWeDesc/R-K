import { PatologyInSolicitationRequestDTO } from "../../../application/DTOs/PatologyInSolicitationDTO/PatologyInSolicitationRequestDTO";
import { IPatologyInSolicitationRepository } from "../../../infra/repositories/PatologyInSolicitation/IPatologyInSolicitationRepository";
import GetUniqueSolicitationsUseCase from "../Solicitations/GetUniqueSolicitation/GetUniqueSolicitationsUseCase";

export default class CreatePatologyInSolicitationUseCase {
  constructor(
    readonly patologyInSolicitationRepositoy: IPatologyInSolicitationRepository,
    readonly getUniqueSolicitationUseCase: GetUniqueSolicitationsUseCase
  ) {}

  async execute(requestDTO: PatologyInSolicitationRequestDTO) {
    const solicitationById = await this.getUniqueSolicitationUseCase.execute(
      requestDTO.solicitationId
    );

    if (solicitationById.solicitationsDetails.patologyInSolicitation)
      throw new Error("Já existe sessão de patologia nessa guia!");

    return await this.patologyInSolicitationRepositoy.create(requestDTO);
  }
}
