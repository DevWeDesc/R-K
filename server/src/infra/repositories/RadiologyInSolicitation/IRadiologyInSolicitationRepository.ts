import { Exams } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import { ExamTypeEnum } from "../../../domain/enums/ExamTypeEnum";

export interface IRadiologyInSolicitationRepository
  extends IGenericRepository<ExamsRequestDTO, Exams> {
  getByName(name: string): Promise<Exams[] | Exams>;
  findByTypeExam(typeExam: ExamTypeEnum): Promise<Exams[] | Exams>;
  countExams(name?: string): Promise<number>;
  findByName(name: string): Promise<Exams | null>;
  createMany(exams: string[]): Promise<any>;
}
