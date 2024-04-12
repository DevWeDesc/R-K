import { FastifyInstance } from "fastify";
import { PetsController } from "../controllers/PetsController";

export async function petsRoutes(app: FastifyInstance) {
  app.get("/pets", PetsController.GetAllPets);
  app.get("/pets/customer/:idCustomer", PetsController.GetPetsPerCustomer);
  app.post("/pets", PetsController.CreatePet);
}
