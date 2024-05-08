import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from "fastify";
import { VerifyToken } from "../../utils/jwt/VerifyToken";

export const AuthWithRoleMiddleware = async (
  request: FastifyRequest<{ Body: any; Params: any; Querystring: any }>,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.replace(/^Bearer /, "");
    if (!token) reply.code(401).send({ message: "Unauthorized" });
    const jwtDecoded = await VerifyToken(token);
    if (jwtDecoded.roleUser != "Admin")
      reply.code(401).send({ message: "Role not Unauthorized" });
    done();
  } else {
    reply.code(401).send({ message: "Unauthorized token notfound" });
  }
};
