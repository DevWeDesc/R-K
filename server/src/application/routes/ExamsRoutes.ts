import { FastifyInstance } from "fastify";
import { ExamsController } from "../controllers/ExamsController";

export async function examsRoutes(app: FastifyInstance) {
  app.get("/exams", ExamsController.GetExams);
  app.post("/exams", ExamsController.CreateExams);
}
