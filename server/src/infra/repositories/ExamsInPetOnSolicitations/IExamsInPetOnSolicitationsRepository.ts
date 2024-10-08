import { ExamsInPetOnSolicitations } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsInPetOnSolicitationsDTO } from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import {
  IExamsWithMaterialInSolicitation,
  IExamsWithSamples,
} from "../../../application/DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";

export default interface IExamsInPetOnSolicitationsRepository
  extends IGenericRepository<
    ExamsInPetOnSolicitationsDTO,
    ExamsInPetOnSolicitations
  > {
  createMany(solicitationId: string, examsId: number[]): Promise<any>;
  createExamsWithMaterial(
    solicitationId: string,
    entity: IExamsWithMaterialInSolicitation
  ): Promise<any>;
  createExamsWithSample(
    solicitationId: string,
    entity: IExamsWithSamples
  ): Promise<any>;
}
