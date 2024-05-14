import { FastifyInstance } from "fastify";
import { SolicitationsController } from "../controllers/SolicitationsController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function solicitationsRoutes(app: FastifyInstance) {
  app.get(
    "/solicitations",
    { preHandler: AuthMiddleware },
    SolicitationsController.GetAllSolicitations
  );
  app.get(
    "/solicitations/pdf/:idPDf",
    SolicitationsController.PDFPerSolicitation
  );
  app.post(
    "/solicitations",
    { preHandler: AuthMiddleware },
    SolicitationsController.CreateSolicitations
  );
  app.get(
    "/solicitations/:id",
    { preHandler: AuthMiddleware },
    SolicitationsController.GetSolicitationById
  );
  app.patch(
    "/solicitations/:id",
    { preHandler: AuthMiddleware },
    SolicitationsController.FinalizeSolicitation
  );
}
