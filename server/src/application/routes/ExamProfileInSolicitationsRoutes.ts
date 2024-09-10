import { FastifyInstance } from "fastify";

import { AuthMiddleware } from "../middlewares/Auth";
import { ExamsProfileInSolicitationsController } from "../controllers/ExamsProfileInSolicitationsController";

export async function examProfileInSolicitationsRoutes(app: FastifyInstance) {
  app.post(
    "/examProfileInSolicitations",
    { preHandler: AuthMiddleware },
    ExamsProfileInSolicitationsController.CreateExamsProfileInSolicitation
  );
  app.get(
    "/examProfileInSolicitations",
    { preHandler: AuthMiddleware },
    ExamsProfileInSolicitationsController.GetExamsProfileInSolicitation
  );
}
