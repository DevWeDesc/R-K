import CreateExamsUseCase from "./domain/useCases/Exams/CreateExamsUseCase";
import GetExamsUseCase from "./domain/useCases/Exams/GetExamsUseCase";
import CreateGroupUseCase from "./domain/useCases/Groups/CreateGroupUseCase";
import GetGroupsUseCase from "./domain/useCases/Groups/GetGroupsUseCase";
import AutenticationUserUseCase from "./domain/useCases/UsersLogin/AutenticationUserUseCase";
import { CreateLoginUseCase } from "./domain/useCases/UsersLogin/CreateLoginUseCase";
import { GetAllLoginsUseCase } from "./domain/useCases/UsersLogin/GetAllUsersUseCase";
import { GetUniqueUserUseCase } from "./domain/useCases/UsersLogin/GetUniqueUserUseCase";
import GetAllVeterinariansUseCase from "./domain/useCases/Veterinarians/GetAllVeterinariansUseCase";
import GetUniqueVeterinarianUseCase from "./domain/useCases/Veterinarians/GetUniqueVeterinarianUseCase";
import ExamsRepository from "./infra/repositories/Exams/ExamsRepository";
import GroupRepository from "./infra/repositories/Groups/GroupRepository";
import { UserLoginRepository } from "./infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "./infra/repositories/Veterinarian/VeterinarianRepository";

// Errors
export const VeterinarianNotFound = require("./domain/errors/VeterinarianError/VeterinarianNotFound");

// Repositories
export const userLoginRepository = new UserLoginRepository();
export const veterinarianRepository = new VeterinarianRepository();
export const examsRepository = new ExamsRepository();
export const groupRepository = new GroupRepository();

// Use Cases
export const createLoginUseCase = new CreateLoginUseCase(
  userLoginRepository,
  veterinarianRepository
);
export const getAllLoginsUseCase = new GetAllLoginsUseCase();
export const getUniqueUserUseCase = new GetUniqueUserUseCase();
export const autenticationUserUseCase = new AutenticationUserUseCase(
  userLoginRepository,
  veterinarianRepository
);
export const getUniqueVeterinarianUseCase = new GetUniqueVeterinarianUseCase(
  veterinarianRepository
);
export const getAllVeterinariansUseCase = new GetAllVeterinariansUseCase(
  veterinarianRepository
);
export const getExamsUseCase = new GetExamsUseCase(examsRepository);
export const createExamsUseCase = new CreateExamsUseCase(examsRepository);
export const createGroupUseCase = new CreateGroupUseCase(groupRepository);
export const getGroupsUseCase = new GetGroupsUseCase(groupRepository);
