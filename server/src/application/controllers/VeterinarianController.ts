import { FastifyRequest, FastifyReply } from "fastify";
import {
  getAllVeterinariansUseCase,
  getUniqueVeterinarianUseCase,
} from "../..";
import { IVeterinarianModel } from "../../domain/models/Veterinarian";

export const VeterinarianController = {
  GetVeterinarianQuery: async (
    request: FastifyRequest<{
      Querystring: { email?: string; id?: number; crmv?: string };
    }>,
    reply: FastifyReply
  ) => {
    const { email, crmv, id } = request.query;
    try {
      let res: IVeterinarianModel[] | IVeterinarianModel =
        await getAllVeterinariansUseCase.execute();

      switch (true) {
        case !!email:
          res = await getUniqueVeterinarianUseCase.byEmail(email);
          break;
        case !!crmv:
          res = await getUniqueVeterinarianUseCase.byCRMV(crmv);
          break;
        case !!id:
          res = await getUniqueVeterinarianUseCase.byId(id);
          break;
      }

      return reply.code(201).send(res);
    } catch (err) {
      return reply.code(400).send(err);
    }
  },
};
