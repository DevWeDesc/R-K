import { PatologyInSolicitation } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { PatologyInSolicitationRequestDTO } from "../../../application/DTOs/PatologyInSolicitationDTO/PatologyInSolicitationRequestDTO";

export interface IPatologyInSolicitationRepository
  extends IGenericRepository<
    PatologyInSolicitationRequestDTO,
    PatologyInSolicitation
  > {}
