import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const FinalizeSolicitation = async (
  idSolicitation: string,
  emailVeterinarian: string,
  observations: string
): Promise<AxiosResponse> => {
  const dataRequest = { isFinished: true, emailVeterinarian, observations };
  return await api.patch(
    `/solicitations/${idSolicitation}`,
    dataRequest,
    headerRequest
  );
};
