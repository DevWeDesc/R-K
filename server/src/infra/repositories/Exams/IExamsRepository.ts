import { Exams } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";
import { IExamsModel } from "../../../domain/models/Exams";

export interface IExamsRepository
  extends IGenericRepository<IExamsModel, Exams> {
  getByName(name: string): Promise<Exams[] | Exams>;
}
