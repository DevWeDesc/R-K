import { FastifyRequest, FastifyReply } from "fastify";
import { createExamsUseCase, getExamsUseCase } from "../..";
import { ExamsRequestDTO } from "../DTOs/ExamsDTO/ExamsRequestDTO";

export const ExamsController = {
  GetExams: async (
    request: FastifyRequest<{
      Querystring: { name: string; id: string };
    }>,
    reply: FastifyReply
  ) => {
    const { name, id } = request.query;
    try {
      const res = await getExamsUseCase.execute(name, id);

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateExams: async (
    request: FastifyRequest<{
      Body: ExamsRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createExamsUseCase.execute(body);

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
