import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const FinalizeSolicitation = async (
  idSolicitation: string,
  emailVeterinarian: string,
  observation: string
): Promise<AxiosResponse> => {
  const dataRequest = { isFinished: true, emailVeterinarian, observation };
  return await api.patch(
    `/solicitations/${idSolicitation}`,
    dataRequest,
    headerRequest
  );
};
