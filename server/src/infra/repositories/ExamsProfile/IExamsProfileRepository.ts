import { Exams, ExamsProfile } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";

export interface IExamsProfileRepository
  extends IGenericRepository<ExamsProfileRequestDTO, ExamsProfile> {
  findByName(name: string): Promise<ExamsProfile | null>;
}
