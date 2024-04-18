import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from "fastify";
import { UniqueCustomerEmailPhoneDTO } from "../DTOs/CustomersDTO/UniqueCustomerEmailPhoneDTO";
import { VerifyToken } from "../../utils/jwt/VerifyToken";

export const AuthMiddleware = (
  request: FastifyRequest<{ Querystring: UniqueCustomerEmailPhoneDTO }>,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.replace(/^Bearer /, "");
    if (!token) reply.code(401).send({ message: "Unauthorized" });
    VerifyToken(token);
    done();
  }
};
