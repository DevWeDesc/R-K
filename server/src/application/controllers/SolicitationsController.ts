import { FastifyRequest, FastifyReply, FastifyPluginAsync } from "fastify";
import {
  createRadiologyInSolicitationUseCase,
  createRadiologySectionsUseCase,
  createSolicitationsUseCase,
  finalizeSolicitationUseCase,
  getAllRadiologyInSolicitationsUseCase,
  getAllSolicitationsUseCase,
  getUniqueSolicitationsUseCase,
  pdfPerSolicitationUseCase,
} from "../..";
import { SolicitationRequestDTO } from "../DTOs/SolicitationsDTO/SolicitationRequestDTO";
import { CreateRadiologyInSolicitationRequestDTO } from "../DTOs/RadiologyInSolicitationDTO/CreateRadiologyInSolicitationRequestDTO";
import {
  CreateRadiologySectionRequestControllerDTO,
  CreateRadiologySectionRequestDTO,
} from "../DTOs/RadiologySectionsDTO/CreateRadiologySectionRequestDTO";

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
    request: FastifyRequest<{
      Params: { id: string };
      Body: { emailVeterinarian?: string; observation?: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const { emailVeterinarian, observation } = request.body;
      const res = await finalizeSolicitationUseCase.execute(
        id,
        emailVeterinarian,
        observation
      );
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

  PDFPerSolicitation: async (
    request: FastifyRequest<{ Params: { idPDf: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { idPDf } = request.params;
      const res = await pdfPerSolicitationUseCase.execute(idPDf);

      reply.header("Content-Type", "application/pdf");
      reply.header("Content-Disposition", "inline");

      return reply.send(res);
    } catch (err) {
      reply.status(404).send(err);
    }
  },

  CreateRadiology: async (
    request: FastifyRequest<{ Body: CreateRadiologyInSolicitationRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createRadiologyInSolicitationUseCase.execute(body);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(404).send(err);
    }
  },

  GetRadiologies: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllRadiologyInSolicitationsUseCase.execute();
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(404).send(err);
    }
  },

  CreateRadiologySections: async (
    request: FastifyRequest<{
      Body: CreateRadiologySectionRequestControllerDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createRadiologySectionsUseCase.execute(body.data);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(404).send(err);
    }
  },
};
