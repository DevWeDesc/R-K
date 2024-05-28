import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export interface IRequestSendCode {
  email: string;
}

export const SendCodeForEmailService = async (
  dataRequest: IRequestSendCode
): Promise<AxiosResponse> => {
  return await api.post("/veterinarian/forgotPassword", dataRequest);
};
