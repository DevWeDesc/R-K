import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { FinalizeSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/FinalizeSolicitaton/FinalizeSolicitationRequestDTO";

export const FinalizeSolicitation = async (
  idSolicitation: string,
  requestDTO: FinalizeSolicitationRequestDTO
): Promise<AxiosResponse> => {
  return await api.patch(
    `/solicitations/${idSolicitation}`,
    requestDTO,
    headerRequest
  );
};
