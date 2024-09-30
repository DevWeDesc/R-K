import { PatologyInSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/PatologyInSolicitation/PatologyInSolicitationRequestDTO";
import { headerRequest } from "@/services/UserLocal";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const CreatePatologyInSolicitation = async (
  patologyInSolicitationRequestDTO: PatologyInSolicitationRequestDTO
): Promise<AxiosResponse> => {
  return await api.post(
    "/solicitation/radiology/patology",
    patologyInSolicitationRequestDTO,
    headerRequest
  );
};
