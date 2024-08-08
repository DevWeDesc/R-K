import { headerRequest } from "../UserLocal";
import { IExamsProfile } from "@/@interfaces/IExamsProfile";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const GetExamsProfile = async (): Promise<
  AxiosResponse<IExamsProfile[]>
> => {
  return await api.get(`/profile`, headerRequest);
};
