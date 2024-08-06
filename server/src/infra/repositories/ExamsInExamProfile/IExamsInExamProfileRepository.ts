import { ExamsInExamProfile } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsInExamProfileRequestDTO } from "../../../application/DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";

export interface IExamsInExamProfileRepository
  extends IGenericRepository<
    ExamsInExamProfileRequestDTO,
    ExamsInExamProfile
  > {}
