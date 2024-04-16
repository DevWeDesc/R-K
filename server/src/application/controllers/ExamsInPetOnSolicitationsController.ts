import { FastifyRequest, FastifyReply } from "fastify";
import {
  createExamsInPetOnSolicitationsUseCase,
  getAllExamsInPetOnSolicitationsUseCase,
} from "../..";
import { ExamsInPetOnSolicitationsDTO } from "../DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";

export const ExamsInPetOnSolicitationsController = {
  GetExamsInPet: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllExamsInPetOnSolicitationsUseCase.execute();

      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateExamsInPet: async (
    request: FastifyRequest<{
      Body: ExamsInPetOnSolicitationsDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createExamsInPetOnSolicitationsUseCase.execute(body);

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
