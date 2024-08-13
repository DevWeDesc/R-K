import { GetAllExamsWithTypeResponse } from "@/@interfaces/DTOs/Exams/GetAllExamsWithTypeResponse";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const GetAllExamsWithTypeService = async (): Promise<
  AxiosResponse<GetAllExamsWithTypeResponse>
> => {
  return await api.get("/exams/type", headerRequest);
};
