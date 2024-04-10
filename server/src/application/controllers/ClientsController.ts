import { FastifyRequest, FastifyReply } from "fastify";
import { ClientsRequestDTO } from "../DTOs/ClientsDTO/ClientsRequestDTO";
import { createClientUseCase, getAllClientsUseCase } from "../..";

export const ClientsController = {
  CreateClient: async (
    request: FastifyRequest<{ Body: ClientsRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createClientUseCase.execute(body);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  GetAllClients: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllClientsUseCase.execute();
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },
};
