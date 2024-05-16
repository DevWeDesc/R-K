import { IRegisterAccountDTO } from "@/@interfaces/DTOs/User/RegisterAccountDTO";
import { api } from "@/utils/Api/AxiosInstance";

export const CreateUser = async (
  registerRequest: IRegisterAccountDTO
): Promise<any> => {
  await api.post("/login", registerRequest);
};
