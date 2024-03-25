import { ILoginUser, userRole } from "@/@interfaces/ILoginForm";

export const UsersMock: ILoginUser[] = [
  {
    CRMV: "12345",
    Email: "daniel@gmail.com",
    Password: "123",
    userRole: userRole.Admin,
  },
  {
    CRMV: "12345",
    Email: "teste@gmail.com",
    Password: "teste123",
    userRole: userRole.Veterinarian,
  },
];
