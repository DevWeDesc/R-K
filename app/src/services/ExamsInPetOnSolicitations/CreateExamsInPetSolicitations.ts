// import CreateExamsInPetRequestDTO from "@/@interfaces/DTOs/ExamsInPetSolicitation/CreateExamsInPetRequestDTO";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ExamsInPetOnSolicitationsRequestDTO } from "@/@interfaces/DTOs/ExamsInPetSolicitation/ExamsInPetOnSolicitationsRequestDTO";

export const CreateExamsInPetSolicitations = async (
  createExamsInPetRequestDTO: ExamsInPetOnSolicitationsRequestDTO
): Promise<AxiosResponse> => {
  return await api.post(
    "/examsinpet/solicitations",
    createExamsInPetRequestDTO,
    headerRequest
  );
};
