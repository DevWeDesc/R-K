import { FastifyInstance } from "fastify";
import { GroupsController } from "../controllers/GroupsController";

export async function groupsRoutes(app: FastifyInstance) {
  app.get("/groups", GroupsController.GetAllGroups);
  app.post("/groups", GroupsController.CreateGroups);
}
