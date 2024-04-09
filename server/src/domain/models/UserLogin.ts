import { UserRole } from "@prisma/client";
import { IVeterinarianModel } from "./Veterinarian";

export interface IUserLoginModel {
  id?: number;
  password: string;
  roleUser: UserRole;
  veterinarians?: IVeterinarianModel;
}
