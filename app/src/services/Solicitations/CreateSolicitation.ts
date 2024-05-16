import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ISolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/SolicitationRequestDTO";

export const CreateSolicitation = async (
  solicitationRequest: ISolicitationRequestDTO
): Promise<AxiosResponse> => {
  return await api.post("/solicitations", solicitationRequest, headerRequest);
};
