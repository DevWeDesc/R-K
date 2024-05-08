import { UsersLogin } from "@prisma/client";
import { UserLoginRepository } from "../../../infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";
import VeterinarianRequestDTO from "../../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";
import { prisma } from "../../../lib/prismaClient";
import { hash } from "bcrypt";
import { randomInt } from "crypto";

export default class UpdateUserUseCase {
  constructor(
    readonly userLoginRepository: UserLoginRepository,
    readonly veterinarianRepository: VeterinarianRepository
  ) {}

  public async execute(
    id: number,
    VeterinarianRequestDTO: VeterinarianRequestDTO,
    LoginRequestDTO: UsersLogin
  ) {
    const userbyId = await prisma.usersLogin.findUnique({ where: { id } });
    if (!userbyId) throw new Error("Usuário inserido não é valido!");

    const randomSalt = randomInt(10, 16);
    const passwordHashed = await hash(userbyId.password, randomSalt);

    LoginRequestDTO.password = passwordHashed;

    await prisma.usersLogin.update({ where: { id }, data: LoginRequestDTO });
    await prisma.veterinarians.update({
      where: { id },
      data: VeterinarianRequestDTO,
    });

    return { message: "Usuário editado com sucesso!" };
  }
}
