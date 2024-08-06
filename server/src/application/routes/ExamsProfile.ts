import { FastifyInstance } from "fastify";
import { ExamsController } from "../controllers/ExamsController";
import { AuthMiddleware } from "../middlewares/Auth";
import { AuthWithRoleMiddleware } from "../middlewares/AuthWithRole";

export async function examsProfileRoutes(app: FastifyInstance) {
  app.get(
    "/profile",
    { preHandler: AuthMiddleware },
    ExamsController.GetExamsProfile
  );

  app.post(
    "/profile",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.CreateExamsProfile
  );
  app.put(
    "/profile/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.UpdateExamsProfile
  );
  app.delete(
    "/profile/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.DeleteExamsProfile
  );

  app.get(
    "/profile/exams",
    { preHandler: AuthMiddleware },
    ExamsController.GetExamsInExamProfile
  );

  app.post(
    "/profile/exams",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.CreateExamsInExamProfile
  );
  app.put(
    "/profile/exams/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.UpdateExamsInExamProfile
  );
  app.delete(
    "/profile/exams/:id",
    { preHandler: AuthWithRoleMiddleware },
    ExamsController.DeleteExamsInExamProfile
  );
}
