import { ILoginUser } from "@/@interfaces/ILoginForm";
import { userRoleEnum } from "@/enums/UserRoleEnum";

export const UsersMock: ILoginUser[] = [
  {
    crmv: "12345",
    email: "daniel@gmail.com",
    password: "123",
    userRole: userRoleEnum.admin,
    state: "SP - São Paulo",
  },
  {
    crmv: "12345",
    email: "teste@gmail.com",
    password: "teste123",
    userRole: userRoleEnum.veterinarian,
    state: "SP - São Paulo",
  },
];
