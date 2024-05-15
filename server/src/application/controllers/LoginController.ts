import { UsersLogin } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import {
  autenticationUserUseCase,
  createLoginUseCase,
  deleteLoginUseCase,
  getAllLoginsUseCase,
  updateUserUseCase,
} from "../..";
import VeterinarianRequestDTO from "../DTOs/VeterinarianDTO/VeterinarianRequestDTO";

export const LoginController = {
  TestRoute: async (request: FastifyRequest, reply: FastifyReply) => {
    return "Hello World";
  },

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
    request: FastifyRequest<{
      Body: { crmv: string; email: string; password: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { crmv, email, password } = request.body;
      const res = await autenticationUserUseCase.execute(crmv, email, password);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  DeleteUserLogin: async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      await deleteLoginUseCase.execute(parseInt(id));
      reply.code(204).send();
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  UpdateUser: async (
    request: FastifyRequest<{
      Params: { id: string };
      Body: {
        LoginRequestDTO: UsersLogin;
        VeterinarianRequestDTO: VeterinarianRequestDTO;
      };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { LoginRequestDTO, VeterinarianRequestDTO } = request.body;
      const { id } = request.params;
      await updateUserUseCase.execute(
        parseInt(id),
        VeterinarianRequestDTO,
        LoginRequestDTO
      );
      reply.code(204).send();
    } catch (err) {
      reply.code(404).send(err);
    }
  },
};
