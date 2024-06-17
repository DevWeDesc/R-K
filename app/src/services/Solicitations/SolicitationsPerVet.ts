import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { IReportPerVet } from "@/@interfaces/ReportsPerVet";

export interface ParamsSolicitationsPerVet {
  initialDate?: string | null;
  finalDate?: string | null;
  name?: string | null;
}

export const SolicitationsPerVet = async (
  paramsSolicitationsPerVet: ParamsSolicitationsPerVet
): Promise<AxiosResponse<IReportPerVet[]>> => {
  return await api.get(
    `/veterinarian/solicitations?${
      paramsSolicitationsPerVet.name && `name=${paramsSolicitationsPerVet.name}`
    }${
      paramsSolicitationsPerVet.initialDate &&
      `&initialDate=${paramsSolicitationsPerVet.initialDate}`
    }${
      paramsSolicitationsPerVet.initialDate &&
      `&finalDate=${paramsSolicitationsPerVet.finalDate}`
    }`,
    headerRequest
  );
};
