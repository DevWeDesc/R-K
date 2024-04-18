import { FastifyRequest, FastifyReply } from "fastify";
import {
  getAllVeterinariansUseCase,
  getSolicitationsByVeterinarian,
} from "../..";

export const VeterinarianController = {
  GetVeterinarianQuery: async (
    request: FastifyRequest<{
      Querystring: { email?: string; id?: string; crmv?: string };
    }>,
    reply: FastifyReply
  ) => {
    const { email, crmv, id } = request.query;
    try {
      const res = await getAllVeterinariansUseCase.execute(email, crmv, id);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetQuantitySolicitationsPerVeterinarian: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const res = await getSolicitationsByVeterinarian.execute();
      reply.status(200).send(res);
    } catch (err) {
      reply.status(404).send(err);
    }
  },
};
