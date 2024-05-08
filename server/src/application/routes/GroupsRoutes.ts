import { FastifyInstance } from "fastify";
import { GroupsController } from "../controllers/GroupsController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function groupsRoutes(app: FastifyInstance) {
  app.get(
    "/groups",
    { preHandler: AuthMiddleware },
    GroupsController.GetAllGroups
  );
  app.post(
    "/groups",
    { preHandler: AuthMiddleware },
    GroupsController.CreateGroups
  );
}
