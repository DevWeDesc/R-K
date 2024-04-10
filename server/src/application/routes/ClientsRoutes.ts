import { FastifyInstance } from "fastify";
import { ClientsController } from "../controllers/ClientsController";

export async function clientsRoutes(app: FastifyInstance) {
  app.post("/clients", ClientsController.CreateClient);
  app.get("/clients", ClientsController.GetAllClients);
}
