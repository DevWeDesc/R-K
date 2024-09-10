import { CreateManyExamsProfileInSolicitationRequestDTO } from "@/@interfaces/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import { api } from "@/utils/Api/AxiosInstance";
import { headerRequest } from "../UserLocal";

export const CreateExamsProfileInSolicitationsService = async (
  requestDTO: CreateManyExamsProfileInSolicitationRequestDTO
): Promise<{ message: string }> => {
  return api.post("/examProfileInSolicitations", requestDTO, headerRequest);
};
