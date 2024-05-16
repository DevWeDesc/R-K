import { userRoleEnum } from "@/enums/UserRoleEnum";

export interface ILoginUser {
  crmv: string;
  email: string;
  password: string;
  userRole?: userRoleEnum;
}
