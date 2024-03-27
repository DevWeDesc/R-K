import { ILoginUser } from "@/@interfaces/ILoginForm";
import { userRoleEnum } from "@/enums/UserRoleEnum";

export const UsersMock: ILoginUser[] = [
  {
    CRMV: "12345",
    Email: "daniel@gmail.com",
    Password: "123",
    userRole: userRoleEnum.admin,
  },
  {
    CRMV: "12345",
    Email: "teste@gmail.com",
    Password: "teste123",
    userRole: userRoleEnum.veterinarian,
  },
];
