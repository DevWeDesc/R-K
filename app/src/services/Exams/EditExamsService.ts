import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ICreateExamRequestDTO } from "@/@interfaces/DTOs/Exams/CreateExamRequestDTO";

export const EditExamsService = async (
  examId: number,
  dataRequest: ICreateExamRequestDTO
): Promise<AxiosResponse> => {
  return await api.put(`/exams/${examId}`, dataRequest, headerRequest);
};
