import { ICustomer } from "./ICustomer";

export interface IPets {
  age: string;
  customerId: number;
  id: number;
  name: string;
  sex: string;
  specie: string;
  customer?: ICustomer;
}
