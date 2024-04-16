import { FastifyInstance } from "fastify";
import { ExamsInPetOnSolicitationsController } from "../controllers/ExamsInPetOnSolicitationsController";

export async function examsInPetOnSolicitationsRoutes(app: FastifyInstance) {
  app.get(
    "/examsinpet/solicitations",
    ExamsInPetOnSolicitationsController.GetExamsInPet
  );
  app.post(
    "/examsinpet/solicitations",
    ExamsInPetOnSolicitationsController.CreateExamsInPet
  );
}
