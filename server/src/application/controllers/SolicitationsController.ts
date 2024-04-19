import { FastifyRequest, FastifyReply } from "fastify";
import {
  createSolicitationsUseCase,
  finalizeSolicitationUseCase,
  getAllSolicitationsUseCase,
  getUniqueSolicitationsUseCase,
} from "../..";
import { SolicitationRequestDTO } from "../DTOs/SolicitationsDTO/SolicitationRequestDTO";

export const SolicitationsController = {
  GetAllSolicitations: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllSolicitationsUseCase.execute();
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  FinalizeSolicitation: async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await finalizeSolicitationUseCase.execute(id);
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetSolicitationById: async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await getUniqueSolicitationsUseCase.execute(id);
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateSolicitations: async (
    request: FastifyRequest<{ Body: SolicitationRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createSolicitationsUseCase.execute(body);
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
