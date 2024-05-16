import { IPets } from "./IPets";

export interface ICustomer {
  cpf: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  pets?: IPets[];
}
