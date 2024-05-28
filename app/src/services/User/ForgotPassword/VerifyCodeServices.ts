import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export interface IVerifyCode {
  code: string;
}

export const VerifyCodeServices = async (
  dataRequest: IVerifyCode
): Promise<AxiosResponse> => {
  return await api.post("/veterinarian/verifyCode", dataRequest);
};
