import { FastifyInstance } from "fastify";
import { LoginController } from "../controllers/LoginController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function usersRoutes(app: FastifyInstance) {
  app.get("/hello", LoginController.TestRoute);
  app.post("/login", LoginController.CreateLogin);
  app.get("/login", LoginController.GetAllUsers);
  // app.get("/getuniqueuser", LoginController.GetUnique);
  app.post("/login/authenticate", LoginController.Authenticate);
  app.delete(
    "/login/:id",
    { preHandler: AuthMiddleware },
    LoginController.DeleteUserLogin
  );
  app.put(
    "/login/:id",
    { preHandler: AuthMiddleware },
    LoginController.UpdateUser
  );
}
