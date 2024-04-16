import { Solicitations } from "@prisma/client";
import { SolicitationRequestDTO } from "../../../application/DTOs/SolicitationsDTO/SolicitationRequestDTO";
import { IGenericRepository } from "../IGenericRepository";

export interface ISolicitationsRepository
  extends IGenericRepository<SolicitationRequestDTO, Solicitations> {}
