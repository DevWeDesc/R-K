import { app } from "./app";

app.listen({ host: "0.0.0.0", port: 3335 }).then(() => {
  console.log("servidor iniciado na porta http://localhost:3335");
});
