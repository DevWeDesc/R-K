import { FastifyInstance } from "fastify";
import { LoginController } from "../controllers/LoginController";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/login", LoginController.CreateLogin);
  app.get("/login", LoginController.GetAllUsers);
  // app.get("/getuniqueuser", LoginController.GetUnique);
  app.post("/login/authenticate", LoginController.Authenticate);
  app.delete("/login/:id", LoginController.DeleteUserLogin);
}
