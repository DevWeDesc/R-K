import { ExamsProfileInSolicitation } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { CreateExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import { CreateManyExamsProfileInSolicitationRequestDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationRequestDTO";
import { CreateManyExamsProfileInSolicitationResponseDTO } from "../../../application/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationResponseDTO";

export interface IExamsProfileInSolicitationRepository
  extends IGenericRepository<
    CreateExamsProfileInSolicitationRequestDTO,
    ExamsProfileInSolicitation
  > {
  findByExamProfileId(
    examProfileId: string
  ): Promise<ExamsProfileInSolicitation | null>;
}
