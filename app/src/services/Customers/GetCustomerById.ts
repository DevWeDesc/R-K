import { ICustomer } from "@/@interfaces/ICustomer";
import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";

export const GetCustomerById = async (
  idCustomer: string
): Promise<AxiosResponse<ICustomer>> => {
  return await api.get(`/customers/${idCustomer}`, headerRequest);
};
