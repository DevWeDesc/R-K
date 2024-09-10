import { FastifyRequest, FastifyReply } from "fastify";
import {
  createExamsInPetOnSolicitationsUseCase,
  deleteExamsInPetOnSolicitationsUseCase,
  getAllExamsInPetOnSolicitationsUseCase,
} from "../..";
import { ExamsInPetOnSolicitationsDTO } from "../DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsDTO";
import { ExamsInPetOnSolicitationsRequestDTO } from "../DTOs/ExamsInPetOnSolicitationsDTO/ExamsInPetOnSolicitationsRequestDTO";

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
      Body: ExamsInPetOnSolicitationsRequestDTO;
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

  DeleteExamsInPet: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      await deleteExamsInPetOnSolicitationsUseCase.execute(parseInt(id));
      return reply.code(204).send();
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
