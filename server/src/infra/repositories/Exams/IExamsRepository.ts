import { Exams } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";

export interface IExamsRepository
  extends IGenericRepository<ExamsRequestDTO, Exams> {
  getByName(name: string): Promise<Exams[] | Exams>;
  countExams(name?: string): Promise<number>;
}
