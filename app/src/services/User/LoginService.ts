import { ILoginUser } from "@/@interfaces/ILoginForm";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";

export const LoginService = async (
  handleSubmitUser: ILoginUser
): Promise<AxiosResponse> => {
  let { crmv, email, password, state } = handleSubmitUser;
  crmv = `${state}-${crmv}`;

  const dataRequest = {
    crmv,
    email,
    password,
  };

  return await api.post("/login/authenticate", dataRequest);
};
