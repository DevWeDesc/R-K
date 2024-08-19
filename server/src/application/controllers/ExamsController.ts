import { FastifyRequest, FastifyReply } from "fastify";
import {
  createExamsInExamProfileUseCase,
  createExamsProfileUseCase,
  createExamsUseCase,
  deleteExamInExamProfileUseCase,
  deleteExamProfileUseCase,
  deleteExamUseCase,
  getAllExamsWithTypeUseCase,
  getExamsInExamProfileUseCase,
  getExamsPerTypeUseCaseImpl,
  getExamsProfileUseCase,
  getExamsUseCase,
  updateExamInExamProfileUseCase,
  updateExamProfileUseCase,
  updateExamUseCase,
} from "../..";
import { ExamsRequestDTO } from "../DTOs/ExamsDTO/ExamsRequestDTO";
import { QueryParamsListAllExams } from "../DTOs/ExamsDTO/QueryParamsListAllExams";
import { ExamTypeEnum } from "../../domain/enums/ExamTypeEnum";
import GetExamsPerTypeUseCase from "../../domain/useCases/Exams/GetExamsPerTypeUseCase";
import { ExamsProfileRequestDTO } from "../DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";
import { ExamsInExamProfileRequestDTO } from "../DTOs/ExamsInExamProfile/ExamsInExamProfileRequestDTO";

export const ExamsController = {
  GetExams: async (
    request: FastifyRequest<{
      Querystring: QueryParamsListAllExams & { id?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const res = await getExamsUseCase.execute(request.query);

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetExamsPerType: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllExamsWithTypeUseCase.execute();

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

  GetExamsProfile: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getExamsProfileUseCase.execute();

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateExamsProfile: async (
    request: FastifyRequest<{ Body: ExamsProfileRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const res = await createExamsProfileUseCase.execute(request.body);

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  UpdateExamsProfile: async (
    request: FastifyRequest<{
      Body: ExamsProfileRequestDTO;
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await updateExamProfileUseCase.execute(
        parseInt(id),
        request.body
      );

      return reply.code(204).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  DeleteExamsProfile: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await deleteExamProfileUseCase.execute(parseInt(id));

      return reply.code(204).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetExamsInExamProfile: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const res = await getExamsInExamProfileUseCase.execute();

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateExamsInExamProfile: async (
    request: FastifyRequest<{ Body: ExamsInExamProfileRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const res = await createExamsInExamProfileUseCase.execute(request.body);

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  UpdateExamsInExamProfile: async (
    request: FastifyRequest<{
      Body: ExamsInExamProfileRequestDTO;
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await updateExamInExamProfileUseCase.execute(
        parseInt(id),
        request.body
      );

      return reply.code(204).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  DeleteExamsInExamProfile: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await deleteExamInExamProfileUseCase.execute(parseInt(id));

      return reply.code(204).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
