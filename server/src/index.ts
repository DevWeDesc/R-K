import CreateCustomerUseCase from "./domain/useCases/Customers/CreateCustomer/CreateCustomerUseCase";
import DeletedCustomerUseCase from "./domain/useCases/Customers/DeletedCustomer/DeletedCustomerUseCase";
import GetAllCustomersUseCase from "./domain/useCases/Customers/GetAllCustomer/GetAllCustomersUseCase";
import GetUniqueCustomerUseCase from "./domain/useCases/Customers/GetUniqueCustomer/GetUniqueUserUseCase";
import UpdatedCustomerUseCase from "./domain/useCases/Customers/UpdatedCustomer/UpdatedCustomerUseCase";
import CreateExamsUseCase from "./domain/useCases/Exams/CreateExamsUseCase";
import GetExamsUseCase from "./domain/useCases/Exams/GetExamsUseCase";
import CreateGroupUseCase from "./domain/useCases/Groups/CreateGroupUseCase";
import GetGroupsUseCase from "./domain/useCases/Groups/GetGroupsUseCase";
import CreatePetUseCase from "./domain/useCases/Pets/CreatePet/CreatePetUseCase";
import GetAllPetsUseCase from "./domain/useCases/Pets/GetAllPets/GetAllPetsUseCase";
import GetPetsPerCustomerUseCase from "./domain/useCases/Pets/GetPetsPerCustomer/GetPetsPerCustomerUseCase";
import AutenticationUserUseCase from "./domain/useCases/UsersLogin/AutenticationUserUseCase";
import { CreateLoginUseCase } from "./domain/useCases/UsersLogin/CreateLoginUseCase";
import { GetAllLoginsUseCase } from "./domain/useCases/UsersLogin/GetAllUsersUseCase";
import { GetUniqueUserUseCase } from "./domain/useCases/UsersLogin/GetUniqueUserUseCase";
import GetAllVeterinariansUseCase from "./domain/useCases/Veterinarians/GetAllVeterinariansUseCase";
import GetUniqueVeterinarianUseCase from "./domain/useCases/Veterinarians/GetUniqueVeterinarianUseCase";
import CustomerRepository from "./infra/repositories/Customers/CustomerRepository";
import ExamsRepository from "./infra/repositories/Exams/ExamsRepository";
import GroupRepository from "./infra/repositories/Groups/GroupRepository";
import PetsRepository from "./infra/repositories/Pets/PetsRepository";
import { UserLoginRepository } from "./infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "./infra/repositories/Veterinarian/VeterinarianRepository";

// Repositories
export const userLoginRepository = new UserLoginRepository();
export const veterinarianRepository = new VeterinarianRepository();
export const examsRepository = new ExamsRepository();
export const groupRepository = new GroupRepository();
export const customerRepository = new CustomerRepository();
export const petsRepository = new PetsRepository();

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
export const getUniqueCustomerUseCase = new GetUniqueCustomerUseCase(
  customerRepository
);
export const createCustomerUseCase = new CreateCustomerUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);
export const getAllCustomersUseCase = new GetAllCustomersUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);

export const updatedCustomerUseCase = new UpdatedCustomerUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);

export const deletedCustomerUseCase = new DeletedCustomerUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);

export const getAllPetsUseCase = new GetAllPetsUseCase(petsRepository);
export const createPetUseCase = new CreatePetUseCase(
  petsRepository,
  getUniqueCustomerUseCase
);
export const getPetsPerCustomerUseCase = new GetPetsPerCustomerUseCase(
  petsRepository,
  getUniqueCustomerUseCase
);
