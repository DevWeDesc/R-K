import { Exams } from "@prisma/client";

export interface IExamsResponse {
  exams: Exams[];
}
