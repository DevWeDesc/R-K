import CreateExamsInPetRequestDTO from "@/@interfaces/DTOs/ExamsInPetSolicitation/CreateExamsInPetRequestDTO";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const CreateExamsInPetSolicitations = async (
  createExamsInPetRequestDTO: CreateExamsInPetRequestDTO
): Promise<AxiosResponse> => {
  return await api.post(
    "/examsinpet/solicitations",
    createExamsInPetRequestDTO,
    headerRequest
  );
};
