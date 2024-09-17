import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { VeterinariansResponseDTO } from "@/@interfaces/DTOs/Veterinarians/VeterinariansResponseDTO";

export const GetAllVeterinarians = async (): Promise<
  AxiosResponse<VeterinariansResponseDTO[]>
> => {
  return await api.get("/veterinarian", headerRequest);
};
