import { FastifyInstance } from "fastify";
import { ExamsController } from "../controllers/ExamsController";
import { AuthWithRoleMiddleware } from "../middlewares/AuthWithRole";
import { AuthMiddleware } from "../middlewares/Auth";

export async function examsRoutes(app: FastifyInstance) {
  app.get("/exams", { preHandler: AuthMiddleware }, ExamsController.GetExams);
  app.get(
    "/exams/type",
    { preHandler: AuthMiddleware },
    ExamsController.GetExamsPerType
  );
  app.post(
    "/exams",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.CreateExams
  );
  app.put(
    "/exams/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.UpdateExams
  );
  app.delete(
    "/exams/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.RemoveExam
  );
}
