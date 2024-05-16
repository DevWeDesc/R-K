import { api } from "@/utils/Api/AxiosInstance";
import { headerRequest } from "../UserLocal";
import { ICustomer } from "@/@interfaces/ICustomer";

interface QueryStringGetCustomers {
  email?: string;
  phone?: string;
}

export const GetCustomers = async (
  queryString: QueryStringGetCustomers
): Promise<any> => {
  const { email } = queryString;

  return email
    ? await api.get<ICustomer>(
        `/customers${email && `?email=${email}`}`,
        headerRequest
      )
    : await api.get<ICustomer[]>(`/customers`, headerRequest);
};
