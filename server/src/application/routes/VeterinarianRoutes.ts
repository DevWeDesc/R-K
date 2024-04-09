import { FastifyInstance } from "fastify";
import { VeterinarianController } from "../controllers/VeterinarianController";

export async function veterinarianRoutes(app: FastifyInstance) {
  app.get("/veterinarian", VeterinarianController.GetVeterinarianQuery);
}
