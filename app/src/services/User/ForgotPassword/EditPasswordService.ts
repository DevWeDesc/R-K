import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export interface IEditPassword {
  password: string;
}

export const EditPasswordService = async (
  dataRequest: IEditPassword
): Promise<AxiosResponse> => {
  return await api.patch("/veterinarian/editPassword", dataRequest);
};
