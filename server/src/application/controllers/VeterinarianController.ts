import { FastifyRequest, FastifyReply } from "fastify";
import {
  deleteVeterinarianUseCase,
  forgetPasswordUseCase,
  getAllVeterinariansUseCase,
  getSolicitationsByVeterinarian,
} from "../..";

export const VeterinarianController = {
  ForgotPassword: async (
    request: FastifyRequest<{
      Body: { email: string };
    }>,
    reply: FastifyReply
  ) => {
    const { email } = request.body;
    try {
      const res = await forgetPasswordUseCase.execute(email);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

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

  DeleteVeterinarian: async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      await deleteVeterinarianUseCase.execute(parseInt(id));
      reply.status(204).send();
    } catch (err) {
      reply.status(404).send(err);
    }
  },
};
