import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const getHello = async (): Promise<AxiosResponse> => {
  return await api.get("/hello");
};
