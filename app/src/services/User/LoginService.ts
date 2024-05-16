import { ILoginUser } from "@/@interfaces/ILoginForm";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const LoginService = async (
  handleSubmitUser: ILoginUser
): Promise<AxiosResponse> => {
  return await api.post("/login/authenticate", handleSubmitUser);
};
