import { UsersLogin } from "@prisma/client";
import { IGenericRepository } from "../IGenericRepository";

export interface IUserLoginRepository
  extends IGenericRepository<UsersLogin, UsersLogin> {}
