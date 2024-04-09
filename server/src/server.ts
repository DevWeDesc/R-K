import fastify from "fastify";
import { usersRoutes } from "./application/routes/LoginRoutes";
import { veterinarianRoutes } from "./application/routes/VeterinarianRoutes";
import { examsRoutes } from "./application/routes/ExamsRoutes";
import { groupsRoutes } from "./application/routes/GroupsRoutes";

const app = fastify({ logger: true });

app.register(usersRoutes);
app.register(veterinarianRoutes);
app.register(examsRoutes);
app.register(groupsRoutes);

app
  .listen({ port: 3333 })
  .then(() =>
    console.log("Servidor iniciado na porta http://localhost:3333 🚀")
  )
  .catch(() => "Falha ao iniciar o servidor!");
