import { FastifyRequest, FastifyReply } from "fastify";
import {
  createExamsProfileInSolicitationUseCase,
  getExamsProfileInSolicitationUseCase,
} from "../..";

import { CreateManyExamsProfileInSolicitationRequestDTO } from "../DTOs/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationRequestDTO";

export const ExamsProfileInSolicitationsController = {
  CreateExamsProfileInSolicitation: async (
    request: FastifyRequest<{
      Body: CreateManyExamsProfileInSolicitationRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createExamsProfileInSolicitationUseCase.execute(body);

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
  GetExamsProfileInSolicitation: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const res = await getExamsProfileInSolicitationUseCase.execute();

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
