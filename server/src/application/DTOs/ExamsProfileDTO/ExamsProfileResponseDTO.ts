import { ExamsInExamReponseDTO } from "../ExamsInExamProfile/ExamsInExamReponseDTO";

export interface ExamsProfileResponseDTO {
  id: number;
  name: string;
  examsInExamProfile: ExamsInExamReponseDTO;
}
