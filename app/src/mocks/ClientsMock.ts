import { ILoginUser } from "@/@interfaces/ILoginForm";
import { userRoleEnum } from "@/enums/UserRoleEnum";

export const ClientsMock: ILoginUser[] = [
  {
    CRMV: "12345",
    Email: "cliente@gmail.com",
    Password: "123",
    userRole: userRoleEnum.admin,
  },
  {
    CRMV: "12345",
    Email: "felipe@gmail.com",
    Password: "teste123",
    userRole: userRoleEnum.veterinarian,
  },
];
