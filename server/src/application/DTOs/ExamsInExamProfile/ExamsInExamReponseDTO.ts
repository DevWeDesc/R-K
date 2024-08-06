import { Exams } from "@prisma/client";
import { ExamsProfileResponseDTO } from "../ExamsProfileDTO/ExamsProfileResponseDTO";

export interface ExamsInExamReponseDTO {
  id: number;
  examsId: number;
  Exams: Exams;
  examsProfileId: number;
  ExamsProfile: ExamsProfileResponseDTO;
}
