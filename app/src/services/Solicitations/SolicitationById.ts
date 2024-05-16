import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { IGuide } from "@/@interfaces/IGuide";

export const SolicitationById = async (
  idSolicitation: string
): Promise<AxiosResponse<IGuide>> => {
  return await api.get(`/solicitations/${idSolicitation}`, headerRequest);
};
