import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const GetExams = async (
  pageActual?: number,
  examName?: string,
  filterOptions?: string
): Promise<AxiosResponse> => {
  return await api.get(
    `/exams?${pageActual != undefined && `pageActual=${pageActual}`}${
      examName ? `&name=${examName}` : ""
    }${filterOptions ? `&filterByValue=${filterOptions}` : ""}`,
    headerRequest
  );
};
