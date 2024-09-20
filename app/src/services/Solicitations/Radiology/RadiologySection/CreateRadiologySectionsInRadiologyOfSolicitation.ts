import { CreateRadiologySectionControllerRequestDTO } from "@/@interfaces/DTOs/Solicitations/RadiologySection/CreateRadiologySection";
import { headerRequest } from "@/services/UserLocal";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const CreateRadiologySectionsInRadiologyOfSolicitation = async (
  requestBody: CreateRadiologySectionControllerRequestDTO
): Promise<AxiosResponse> => {
  return await api.post(
    "/solicitation/radiology/sections",
    requestBody,
    headerRequest
  );
};
