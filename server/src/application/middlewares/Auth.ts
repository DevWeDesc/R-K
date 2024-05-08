import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from "fastify";
import { VerifyToken } from "../../utils/jwt/VerifyToken";

export const AuthMiddleware = (
  request: FastifyRequest<{ Body: any; Params: any; Querystring: any }>,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.replace(/^Bearer /, "");
    if (!token) reply.code(401).send({ message: "Unauthorized" });
    VerifyToken(token);
    done();
  } else {
    reply.code(401).send({ message: "Unauthorized token notfound" });
  }
};
