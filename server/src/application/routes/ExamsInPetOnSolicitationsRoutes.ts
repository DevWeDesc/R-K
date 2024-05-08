import { FastifyInstance } from "fastify";
import { ExamsInPetOnSolicitationsController } from "../controllers/ExamsInPetOnSolicitationsController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function examsInPetOnSolicitationsRoutes(app: FastifyInstance) {
  app.get(
    "/examsinpet/solicitations",
    { preHandler: AuthMiddleware },
    ExamsInPetOnSolicitationsController.GetExamsInPet
  );
  app.post(
    "/examsinpet/solicitations",
    { preHandler: AuthMiddleware },
    ExamsInPetOnSolicitationsController.CreateExamsInPet
  );
  app.delete(
    "/examsinpet/solicitations/:id",
    { preHandler: AuthMiddleware },
    ExamsInPetOnSolicitationsController.DeleteExamsInPet
  );
}
