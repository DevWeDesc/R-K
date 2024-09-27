import { ReferralWithSpecialistRequestDTO } from "../../../application/DTOs/ReferralWithSpecialist/ReferralWithSpecialistRequestDTO";
import { IReferralWithSpecialistRepository } from "../../../infra/repositories/ReferralWithSpecialist/IReferralWithSpecialistRepository";
import GetUniqueSolicitationsUseCase from "../Solicitations/GetUniqueSolicitation/GetUniqueSolicitationsUseCase";

export default class CreateReferralWithSpecialistUseCase {
  constructor(
    readonly ReferralWithSpecialistUseCaseRepository: IReferralWithSpecialistRepository,
    readonly getUniqueSolicitationUseCase: GetUniqueSolicitationsUseCase
  ) {}

  async execute(requestDTO: ReferralWithSpecialistRequestDTO) {
    const solicitationById = await this.getUniqueSolicitationUseCase.execute(
      requestDTO.solicitationId
    );

    if (solicitationById.solicitationsDetails.referralWithSpecialist)
      throw new Error("Já existe preferência de especialista nessa guia!");

    return await this.ReferralWithSpecialistUseCaseRepository.create(
      requestDTO
    );
  }
}
