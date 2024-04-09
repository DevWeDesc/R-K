import { FastifyInstance } from "fastify";
import { LoginController } from "../controllers/LoginController";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/createlogin", LoginController.CreateLogin);
  app.get("/getalllogins", LoginController.GetAllUsers);
  app.get("/getuniqueuser", LoginController.GetUnique);
  app.post("/authenticate", LoginController.Authenticate);
}
