import { userRoleEnum } from "@/enums/UserRoleEnum";

export interface ILoginUser {
  CRMV: string;
  Email: string;
  Password: string;
  userRole?: userRoleEnum;
}
