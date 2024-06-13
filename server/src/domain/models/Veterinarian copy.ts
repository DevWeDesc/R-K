import { IUserLoginModel } from "./UserLogin";

export interface IVeterinarianModel {
  id?: number;
  name: string;
  crmv: string;
  email: string;
  state: string;
  phone: string;
  veterinarianLogin?: IUserLoginModel;
  usersLoginId: number;
}
