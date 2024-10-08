import { ICustomer } from "./ICustomer";

export interface IPets {
  dateOfBirth: string;
  customerId: number;
  id: number;
  name: string;
  sex: string;
  specie: string;
  customer?: ICustomer;
}
