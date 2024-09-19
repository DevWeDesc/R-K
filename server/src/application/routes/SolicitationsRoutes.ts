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

  app.post(
    "/solicitation/radiology",
    { preHandler: AuthMiddleware },
    SolicitationsController.CreateRadiology
  );

  app.get(
    "/solicitation/radiology",
    { preHandler: AuthMiddleware },
    SolicitationsController.GetRadiologies
  );

  app.post(
    "/solicitation/radiology/sections",
    { preHandler: AuthMiddleware },
    SolicitationsController.CreateRadiologySections
  );
}
