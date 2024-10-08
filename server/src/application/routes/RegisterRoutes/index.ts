import { FastifyInstance } from "fastify";
import { customersRoutes } from "../CustomerRoutes";
import { examsRoutes } from "../ExamsRoutes";
import { groupsRoutes } from "../GroupsRoutes";
import { usersRoutes } from "../LoginRoutes";
import { petsRoutes } from "../PetsRoutes";
import { solicitationsRoutes } from "../SolicitationsRoutes";
import { veterinarianRoutes } from "../VeterinarianRoutes";
import { examsProfileRoutes } from "../ExamsProfile";
import { examProfileInSolicitationsRoutes } from "../ExamProfileInSolicitationsRoutes";
import { examsInPetOnSolicitationsRoutes } from "../ExamsInPetOnSolicitationsRoutes";

export const registerRoutes = (app: FastifyInstance) => {
  app.register(usersRoutes);
  app.register(veterinarianRoutes);
  app.register(examsRoutes);
  app.register(examsProfileRoutes);
  app.register(groupsRoutes);
  app.register(customersRoutes);
  app.register(petsRoutes);
  app.register(solicitationsRoutes);
  app.register(examsInPetOnSolicitationsRoutes);
  app.register(examProfileInSolicitationsRoutes);
};
