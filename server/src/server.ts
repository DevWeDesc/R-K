import fastify from "fastify";
import { registerRoutes } from "./application/routes/RegisterRoutes";
import cors from "@fastify/cors";

const app = fastify({ logger: true });

app.register(cors, { origin: true });

registerRoutes(app);

app
  .listen({ port: 3333 })
  .then(() =>
    console.log("Servidor iniciado na porta http://localhost:3333 🚀")
  )
  .catch(() => "Falha ao iniciar o servidor!");
