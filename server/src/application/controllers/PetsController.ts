import { FastifyRequest, FastifyReply } from "fastify";
import {
  createPetUseCase,
  getAllPetsUseCase,
  getPetsPerCustomerUseCase,
} from "../..";
import { PetRequestDTO } from "../DTOs/PetsDTO/PetRequestDTO";

export const PetsController = {
  GetAllPets: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getAllPetsUseCase.execute();
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  GetPetsPerCustomer: async (
    request: FastifyRequest<{
      Params: { idCustomer: string };
      Querystring: { nameOfPet: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { idCustomer } = request.params;
      const { nameOfPet } = request.query;
      const res = await getPetsPerCustomerUseCase.execute(
        parseInt(idCustomer),
        nameOfPet
      );
      return reply.code(200).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreatePet: async (
    request: FastifyRequest<{
      Body: PetRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createPetUseCase.execute(body);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
