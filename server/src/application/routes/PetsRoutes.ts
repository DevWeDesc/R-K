import { FastifyInstance } from "fastify";
import { PetsController } from "../controllers/PetsController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function petsRoutes(app: FastifyInstance) {
  app.get("/pets", { preHandler: AuthMiddleware }, PetsController.GetAllPets);
  app.get(
    "/pets/customer/:idCustomer",
    { preHandler: AuthMiddleware },
    PetsController.GetPetsPerCustomer
  );
  app.post("/pets", { preHandler: AuthMiddleware }, PetsController.CreatePet);
}
