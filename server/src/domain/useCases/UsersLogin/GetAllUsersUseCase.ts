import { UsersLogin } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";

export class GetAllLoginsUseCase {
  public async execute(): Promise<UsersLogin[]> {
    const allLogins = await prisma.usersLogin.findMany({
      include: { veterinarians: true },
    });
    return allLogins;
  }
}
