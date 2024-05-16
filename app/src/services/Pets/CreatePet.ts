import { IPets } from "@/@interfaces/IPets";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ICreatePetRequestDTO } from "@/@interfaces/DTOs/Pet/CreatePetRequestDTO";

export const CreatePet = async (
  petRequest: ICreatePetRequestDTO
): Promise<AxiosResponse<IPets>> => {
  return await api.post("/pets", petRequest, headerRequest);
};
