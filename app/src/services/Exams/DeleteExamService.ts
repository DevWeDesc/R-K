import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const DeleteExamService = async (
  examId: number
): Promise<AxiosResponse> => {
  return await api.delete(`/exams/${examId}`, headerRequest);
};
