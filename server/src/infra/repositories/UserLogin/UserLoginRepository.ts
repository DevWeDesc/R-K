import { $Enums, UsersLogin } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IUserLoginModel } from "../../../domain/models/UserLogin";
import { IGenericRepository } from "../IGenericRepository";

export class UserLoginRepository implements IGenericRepository<UsersLogin> {
  public async listAll(): Promise<UsersLogin[]> {
    return await prisma.usersLogin.findMany();
  }

  public async update(
    id: string | number,
    entity: UsersLogin
  ): Promise<UsersLogin> {
    let userById = await this.findById(id);

    userById = entity;

    await prisma.usersLogin.update({
      where: { id: parseInt(id.toString()) },
      data: userById,
    });

    return userById;
  }

  public async findById(id: string | number): Promise<UsersLogin> {
    const userByID = await prisma.usersLogin.findUnique({
      where: { id: parseInt(id.toString()) },
    });
    if (!userByID) throw new Error("O usuário informado não existe!");

    return userByID;
  }

  public async create(entity: IUserLoginModel): Promise<UsersLogin> {
    const { password, roleUser } = entity;
    const userCreated = await prisma.usersLogin.create({
      data: { password, roleUser },
    });

    return userCreated;
  }

  public async delete(id: string | number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}