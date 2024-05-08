import { FastifyInstance } from "fastify";
import { VeterinarianController } from "../controllers/VeterinarianController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function veterinarianRoutes(app: FastifyInstance) {
  app.get(
    "/veterinarian",
    { preHandler: AuthMiddleware },
    VeterinarianController.GetVeterinarianQuery
  );
  app.get(
    "/veterinarian/solicitations",
    { preHandler: AuthMiddleware },
    VeterinarianController.GetQuantitySolicitationsPerVeterinarian
  );
  app.delete(
    "/veterinarian/:id",
    { preHandler: AuthMiddleware },
    VeterinarianController.DeleteVeterinarian
  );
}
