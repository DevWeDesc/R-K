import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { IReportPerVet } from "@/@interfaces/ReportsPerVet";

export const SolicitationsPerVet = async (): Promise<
  AxiosResponse<IReportPerVet[]>
> => {
  return await api.get("/veterinarian/solicitations", headerRequest);
};
