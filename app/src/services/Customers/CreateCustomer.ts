import { api } from "@/utils/Api/AxiosInstance";
import { AxiosResponse } from "axios";
import { headerRequest } from "../UserLocal";
import { ICustomerRequestDTO } from "@/@interfaces/DTOs/Customer/CustomerRequestDTO";

export const CreateCustomer = async (
  customerRequest: ICustomerRequestDTO
): Promise<AxiosResponse> => {
  return await api.post("/customers", customerRequest, headerRequest);
};
