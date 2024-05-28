import { FastifyInstance } from "fastify";
import { VeterinarianController } from "../controllers/VeterinarianController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function veterinarianRoutes(app: FastifyInstance) {
  app.get(
    "/veterinarian",
    { preHandler: AuthMiddleware },
    VeterinarianController.GetVeterinarianQuery
  );
  app.post(
    "/veterinarian/forgotPassword",
    VeterinarianController.ForgotPassword
  );
  app.post("/veterinarian/verifyCode", VeterinarianController.VerifyCode);
  app.patch("/veterinarian/editPassword", VeterinarianController.EditPassword);
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
