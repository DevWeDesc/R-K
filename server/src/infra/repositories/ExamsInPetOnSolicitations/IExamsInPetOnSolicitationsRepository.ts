import { ExamsInPetOnSolicitations } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";

export default interface IExamsInPetOnSolicitationsRepository
  extends IGenericRepository<
    ExamsInPetOnSolicitationsDTO,
    ExamsInPetOnSolicitations
  > {
  createMany(solicitationId: string, examsId: number[]): Promise<any>;
}
