import { ReferralWithSpecialistRequestDTO } from "@/@interfaces/DTOs/Solicitations/ReferralWithSpecialist/ReferralWithSpecialistRequestDTO";
import { headerRequest } from "@/services/UserLocal";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const CreateReferralWithSpecialist = async (
  referralWithSpecialistRequestDTO: ReferralWithSpecialistRequestDTO
): Promise<AxiosResponse> => {
  return await api.post(
    "/solicitation/radiology/referralWithSpecialist",
    referralWithSpecialistRequestDTO,
    headerRequest
  );
};
