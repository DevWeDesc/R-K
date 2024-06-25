import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest, userLoged } from "../UserLocal";
import { IReportPerVet } from "@/@interfaces/ReportsPerVet";
import { userRoleEnum } from "@/enums/UserRoleEnum";

export interface ParamsSolicitationsPerVet {
  initialDate?: string;
  finalDate?: string;
  nameVeterinarian?: string;
  namePet?: string;
  nameCustomer?: string;
}

export const SolicitationsPerVet = async (
  paramsSolicitationsPerVet: ParamsSolicitationsPerVet
): Promise<AxiosResponse<IReportPerVet[]>> => {
  const nameVeterinarian =
    userLoged.user.roleUser !== userRoleEnum.admin
      ? userLoged.user.name.replaceAll(" ", "%20")
      : paramsSolicitationsPerVet.nameVeterinarian;
  return await api.get(
    `/veterinarian/solicitations?${
      nameVeterinarian ? `nameVeterinarian=${nameVeterinarian}` : ""
    }${
      paramsSolicitationsPerVet.namePet != ""
        ? `&namePet=${paramsSolicitationsPerVet.namePet}`
        : ""
    }${
      paramsSolicitationsPerVet.nameCustomer != ""
        ? `&nameCustomer=${paramsSolicitationsPerVet.nameCustomer}`
        : ""
    }${
      paramsSolicitationsPerVet.initialDate != ""
        ? `&initialDate=${paramsSolicitationsPerVet.initialDate}`
        : ""
    }${
      paramsSolicitationsPerVet.initialDate != ""
        ? `&finalDate=${paramsSolicitationsPerVet.finalDate}`
        : ""
    }`,
    headerRequest
  );
};
