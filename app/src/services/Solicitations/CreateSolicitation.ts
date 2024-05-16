import { SolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/SolicitationRequestDTO";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const CreateSolicitation = async (
  solicitationRequest: SolicitationRequestDTO
): Promise<AxiosResponse> => {
  return await api.post("/solicitations", solicitationRequest, headerRequest);
};
