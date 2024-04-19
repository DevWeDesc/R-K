import { FastifyInstance } from "fastify";
import { SolicitationsController } from "../controllers/SolicitationsController";

export async function solicitationsRoutes(app: FastifyInstance) {
  app.get("/solicitations", SolicitationsController.GetAllSolicitations);
  app.post("/solicitations", SolicitationsController.CreateSolicitations);
  app.get("/solicitations/:id", SolicitationsController.GetSolicitationById);
  app.patch("/solicitations/:id", SolicitationsController.FinalizeSolicitation);
}
