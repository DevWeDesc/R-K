import { FastifyRequest, FastifyReply } from "fastify";
import { CustomerRequestDTO } from "../DTOs/CustomersDTO/CustomersRequestDTO";
import {
  createCustomerUseCase,
  deletedCustomerUseCase,
  getAllCustomersUseCase,
  getUniqueCustomerUseCase,
  updatedCustomerUseCase,
} from "../..";
import { UniqueCustomerEmailPhoneDTO } from "../DTOs/CustomersDTO/UniqueCustomerEmailPhoneDTO";

export const CustomersController = {
  CreateCustomer: async (
    request: FastifyRequest<{ Body: CustomerRequestDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const { body } = request;
      const res = await createCustomerUseCase.execute(body);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  UpdatedCustomer: async (
    request: FastifyRequest<{
      Params: { id: string };
      Body: CustomerRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { body, params } = request;
      const { id } = params;
      const res = await updatedCustomerUseCase.execute(parseInt(id), body);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  DeletedCustomer: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await deletedCustomerUseCase.execute(parseInt(id));
      reply.code(204).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  GetCustomerById: async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params;
      const res = await getUniqueCustomerUseCase.getcustomerById(parseInt(id));
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },

  GetAllCustomers: async (
    request: FastifyRequest<{ Querystring: UniqueCustomerEmailPhoneDTO }>,
    reply: FastifyReply
  ) => {
    try {
      const { query } = request;
      const res = await getAllCustomersUseCase.execute(query);
      reply.code(200).send(res);
    } catch (err) {
      reply.code(404).send(err);
    }
  },
};
