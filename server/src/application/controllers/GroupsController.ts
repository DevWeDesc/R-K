import { FastifyRequest, FastifyReply } from "fastify";
import { createGroupUseCase, getExamsUseCase, getGroupsUseCase } from "../..";
import { IGroupRequestDTO } from "../DTOs/GroupDTO/GroupRequestDTO";
import { JsonObject, JsonValue } from "@prisma/client/runtime/library";
import GroupRepository from "../../infra/repositories/Groups/GroupRepository";

export const GroupsController = {
  GetAllGroups: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await getGroupsUseCase.execute();
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },

  CreateGroups: async (
    request: FastifyRequest<{
      Body: IGroupRequestDTO;
    }>,
    reply: FastifyReply
  ) => {
    try {
      const res = await createGroupUseCase.execute(request.body);
      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
