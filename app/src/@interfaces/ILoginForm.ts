import { userRoleEnum } from "@/enums/UserRoleEnum";

export interface ILoginUser {
  state: string;
  crmv: string;
  email: string;
  password: string;
  userRole?: userRoleEnum;
}
