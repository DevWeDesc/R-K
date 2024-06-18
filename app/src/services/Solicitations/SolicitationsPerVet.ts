import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { IReportPerVet } from "@/@interfaces/ReportsPerVet";

export interface ParamsSolicitationsPerVet {
  initialDate?: string | null;
  finalDate?: string | null;
  nameVeterinarian?: string | null;
  namePet?: string | null;
  nameCustomer?: string | null;
}

export const SolicitationsPerVet = async (
  paramsSolicitationsPerVet: ParamsSolicitationsPerVet
): Promise<AxiosResponse<IReportPerVet[]>> => {
  return await api.get(
    `/veterinarian/solicitations?${
      paramsSolicitationsPerVet.nameVeterinarian
        ? `nameVeterinarian=${paramsSolicitationsPerVet.nameVeterinarian}`
        : ""
    }${
      paramsSolicitationsPerVet.namePet
        ? `&namePet=${paramsSolicitationsPerVet.namePet}`
        : ""
    }${
      paramsSolicitationsPerVet.nameCustomer
        ? `&nameCustomer=${paramsSolicitationsPerVet.nameCustomer}`
        : ""
    }${
      paramsSolicitationsPerVet.initialDate
        ? `&initialDate=${paramsSolicitationsPerVet.initialDate}`
        : ""
    }${
      paramsSolicitationsPerVet.initialDate
        ? `&finalDate=${paramsSolicitationsPerVet.finalDate}`
        : ""
    }`,
    headerRequest
  );
};
