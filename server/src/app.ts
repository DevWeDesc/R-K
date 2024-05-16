import fastify from "fastify";
import { registerRoutes } from "./application/routes/RegisterRoutes";
import cors from "@fastify/cors";

export const app = fastify({ logger: true });

// const allowedOrigins = [
//   "http://localhost:5173/",
//   "https://r-k-ten.vercel.app/",
// ];

app.register(cors, { origin: true });

registerRoutes(app);

// app
//   .listen({ port: 3335 })
//   .then(() =>
//     console.log("Servidor iniciado na porta http://localhost:3335 🚀")
//   )
//   .catch(() => "Falha ao iniciar o servidor!");
