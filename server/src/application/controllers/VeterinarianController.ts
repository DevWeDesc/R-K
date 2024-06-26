import { FastifyRequest, FastifyReply } from "fastify";
import {
  deleteVeterinarianUseCase,
  editPasswordUseCase,
  forgetPasswordUseCase,
  getAllVeterinariansUseCase,
  getSolicitationsByVeterinarian,
  verifyCodeUseCase,
} from "../..";
import { IQuerySolicitationsPerVet } from "../../domain/useCases/Veterinarians/GetSolicitationsByVeterinarian";

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

  VerifyCode: async (
    request: FastifyRequest<{
      Body: { code: string };
    }>,
    reply: FastifyReply
  ) => {
    const { code } = request.body;
    try {
      const res = await verifyCodeUseCase.execute(code);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  EditPassword: async (
    request: FastifyRequest<{
      Body: { password: string };
    }>,
    reply: FastifyReply
  ) => {
    const { password } = request.body;
    try {
      const res = await editPasswordUseCase.execute(password);
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
    request: FastifyRequest<{
      Querystring: IQuerySolicitationsPerVet;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const res = await getSolicitationsByVeterinarian.execute(request.query);
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
