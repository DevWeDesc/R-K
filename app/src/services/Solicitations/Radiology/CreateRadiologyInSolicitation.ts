import { CreateRadiologyInSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/RadiologyInSolicitation/CreateRadiologyInSolicitationRequestDTO";
import { headerRequest } from "@/services/UserLocal";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const CreateRadiologyInSolicitation = async (
  requestBody: CreateRadiologyInSolicitationRequestDTO
): Promise<AxiosResponse> => {
  return await api.post("/solicitation/radiology", requestBody, headerRequest);
};
