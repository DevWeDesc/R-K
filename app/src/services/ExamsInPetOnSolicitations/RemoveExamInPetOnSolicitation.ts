import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const RemoveExamInPetOnSolicitation = async (
  idExam: number
): Promise<AxiosResponse> => {
  return await api.delete(`/examsinpet/solicitations/${idExam}`, headerRequest);
};
