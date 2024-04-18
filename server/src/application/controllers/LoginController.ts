import { UsersLogin } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import {
  autenticationUserUseCase,
  createLoginUseCase,
  getAllLoginsUseCase,
} from "../..";
import VeterinarianRequestDTO from "../DTOs/VeterinarianDTO/VeterinarianRequestDTO";

export const LoginController = {
  CreateLogin: async (
    request: FastifyRequest<{
      Body: {
        LoginRequestDTO: UsersLogin;
        VeterinarianRequestDTO: VeterinarianRequestDTO;
      };
    }>,
    reply: FastifyReply
  ) => {
    const { LoginRequestDTO, VeterinarianRequestDTO } = request.body;
    try {
      const res = await createLoginUseCase.execute(
        VeterinarianRequestDTO,
        LoginRequestDTO
      );
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetAllUsers: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllLoginsUseCase.execute();
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  // GetUnique: async (request: FastifyRequest, reply: FastifyReply) => {
  //   try {
  //     const res = await getUniqueUserUseCase.execute(1);
  //     reply.code(200).send(res);
  //     console.log(getUniqueUserUseCase.execute(1));
  //   } catch (err) {
  //     reply.code(404).send(err);
  //   }
  // },

  Authenticate: async (
    request: FastifyRequest<{ Body: { email: string; password: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { email, password } = request.body;
      const res = await autenticationUserUseCase.execute(email, password);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },
};
