import { IExams } from "@/@interfaces/IExams";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ICreateExamRequestDTO } from "@/@interfaces/DTOs/Exams/CreateExamRequestDTO";

export const CreateExams = async (
  createExamRequest: ICreateExamRequestDTO
): Promise<AxiosResponse<IExams>> => {
  return await api.post("/exams", createExamRequest, headerRequest);
};
