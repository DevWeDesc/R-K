import { FastifyRequest, FastifyReply } from "fastify";
import {
  createExamsUseCase,
  deleteExamUseCase,
  getExamsUseCase,
  updateExamUseCase,
} from "../..";
import { ExamsRequestDTO } from "../DTOs/ExamsDTO/ExamsRequestDTO";

export const ExamsController = {
  GetExams: async (
    request: FastifyRequest<{
      Querystring: { name: string; id: string; pageActual: number };
    }>,
    reply: FastifyReply
  ) => {
    const { name, id, pageActual } = request.query;
    try {
      const res = await getExamsUseCase.execute(name, id, pageActual);

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

  RemoveExam: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
      await deleteExamUseCase.execute(parseInt(id));

      return reply.code(204).send();
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  UpdateExams: async (
    request: FastifyRequest<{
      Params: { id: string };
      Body: ExamsRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const { id } = request.params;
      await updateExamUseCase.execute(parseInt(id), body);

      return reply.code(204).send();
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
