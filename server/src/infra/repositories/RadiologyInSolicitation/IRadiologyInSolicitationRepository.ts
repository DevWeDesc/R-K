import { RadiologyInSolicitation } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { CreateRadiologyInSolicitationRequestDTO } from "../../../application/DTOs/RadiologyInSolicitationDTO/CreateRadiologyInSolicitationRequestDTO";

export interface IRadiologyInSolicitationRepository
  extends IGenericRepository<
    CreateRadiologyInSolicitationRequestDTO,
    RadiologyInSolicitation
  > {
  findRadiologyInSolicitationBySolicitationId(
    solicitationId: string
  ): Promise<RadiologyInSolicitation | null>;
}
