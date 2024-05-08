import MailModel from "./domain/models/mail/MailModel";
import PdfModel from "./domain/models/pdf/PdfModel";
import CreateCustomerUseCase from "./domain/useCases/Customers/CreateCustomer/CreateCustomerUseCase";
import DeletedCustomerUseCase from "./domain/useCases/Customers/DeletedCustomer/DeletedCustomerUseCase";
import GetAllCustomersUseCase from "./domain/useCases/Customers/GetAllCustomer/GetAllCustomersUseCase";
import GetUniqueCustomerUseCase from "./domain/useCases/Customers/GetUniqueCustomer/GetUniqueUserUseCase";
import UpdatedCustomerUseCase from "./domain/useCases/Customers/UpdatedCustomer/UpdatedCustomerUseCase";
import CreateExamsUseCase from "./domain/useCases/Exams/CreateExamsUseCase";
import DeleteExamUseCase from "./domain/useCases/Exams/DeleteExamUseCase";
import GetExamsUseCase from "./domain/useCases/Exams/GetExamsUseCase";
import UpdateExamUseCase from "./domain/useCases/Exams/UpdatedExamUseCase";
import CreateExamsInPetOnSolicitationsUseCase from "./domain/useCases/ExamsInPetOnSolicitations/CreateExamsInPetOnSolicitationsUseCase";
import DeleteExamsInPetOnSolicitationsUseCase from "./domain/useCases/ExamsInPetOnSolicitations/DeleteExamsInPetOnSolicitationsUseCase";
import GetAllExamsInPetOnSolicitationsUseCase from "./domain/useCases/ExamsInPetOnSolicitations/GetAllExamsInPetOnSolicitationsUseCase";
import CreateGroupUseCase from "./domain/useCases/Groups/CreateGroupUseCase";
import GetGroupsUseCase from "./domain/useCases/Groups/GetGroupsUseCase";
import SendMailUseCase from "./domain/useCases/Mail/SendMailUseCase";
import CreatePetUseCase from "./domain/useCases/Pets/CreatePet/CreatePetUseCase";
import GetAllPetsUseCase from "./domain/useCases/Pets/GetAllPets/GetAllPetsUseCase";
import GetPetsPerCustomerUseCase from "./domain/useCases/Pets/GetPetsPerCustomer/GetPetsPerCustomerUseCase";
import { AddExamInSolicitationUseCase } from "./domain/useCases/Solicitations/AddExamInSolicitation/AddExamInSolicitationUseCase";
import CreateSolicitationsUseCase from "./domain/useCases/Solicitations/CreateSolicitations/CreateSolicitationsUseCase";
import FinalizeSolicitationUseCase from "./domain/useCases/Solicitations/FinalizeSolicitation/FinalizeSolicitationUseCase";
import { GetAllSolicitationsUseCase } from "./domain/useCases/Solicitations/GetAllSolicitations/GetAllSolicitationsUseCase";
import GetUniqueSolicitationsUseCase from "./domain/useCases/Solicitations/GetUniqueSolicitation/GetUniqueSolicitationsUseCase";
import AutenticationUserUseCase from "./domain/useCases/UsersLogin/AutenticationUserUseCase";
import { CreateLoginUseCase } from "./domain/useCases/UsersLogin/CreateLoginUseCase";
import DeleteLoginUseCase from "./domain/useCases/UsersLogin/DeleteLoginUseCase";
import { GetAllLoginsUseCase } from "./domain/useCases/UsersLogin/GetAllUsersUseCase";
import { GetUniqueUserUseCase } from "./domain/useCases/UsersLogin/GetUniqueUserUseCase";
import UpdateUserUseCase from "./domain/useCases/UsersLogin/UpdateUserUseCase";
import CreateVeterinarianUseCase from "./domain/useCases/Veterinarians/CreateVeterinarianUseCase";
import DeleteVeterinarianUseCase from "./domain/useCases/Veterinarians/DeleteVeterinarianUseCase";
import GetAllVeterinariansUseCase from "./domain/useCases/Veterinarians/GetAllVeterinariansUseCase";
import GetSolicitationsByVeterinarian from "./domain/useCases/Veterinarians/GetSolicitationsByVeterinarian";
import GetUniqueVeterinarianUseCase from "./domain/useCases/Veterinarians/GetUniqueVeterinarianUseCase";
import SendMessageWithWhatsApp from "./domain/useCases/WhatsApp/SendMessageWithWhatsApp";
import CustomerRepository from "./infra/repositories/Customers/CustomerRepository";
import ExamsRepository from "./infra/repositories/Exams/ExamsRepository";
import ExamsInPetOnSolicitationsRepository from "./infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository";
import GroupRepository from "./infra/repositories/Groups/GroupRepository";
import PetsRepository from "./infra/repositories/Pets/PetsRepository";
import SolicitationsRepository from "./infra/repositories/Solicitations/SolicitationsRepository";
import { UserLoginRepository } from "./infra/repositories/UserLogin/UserLoginRepository";
import { VeterinarianRepository } from "./infra/repositories/Veterinarian/VeterinarianRepository";
import TokenGenerate from "./utils/jwt/TokenGenerate";

// Repositories
export const userLoginRepository = new UserLoginRepository();
export const veterinarianRepository = new VeterinarianRepository();
export const examsRepository = new ExamsRepository();
export const groupRepository = new GroupRepository();
export const customerRepository = new CustomerRepository();
export const petsRepository = new PetsRepository();
export const solicitationsRepository = new SolicitationsRepository();
export const examsInPetOnSolicitationsRepository =
  new ExamsInPetOnSolicitationsRepository();

//Model
export const pdfModel = new PdfModel();

// Use Cases
export const tokenGenerate = new TokenGenerate();
export const createVeterinarianUseCase = new CreateVeterinarianUseCase(
  veterinarianRepository
);
export const getUniqueVeterinarianUseCase = new GetUniqueVeterinarianUseCase(
  veterinarianRepository
);
export const getAllVeterinariansUseCase = new GetAllVeterinariansUseCase(
  veterinarianRepository
);

export const getSolicitationsByVeterinarian =
  new GetSolicitationsByVeterinarian(veterinarianRepository);

export const deleteVeterinarianUseCase = new DeleteVeterinarianUseCase(
  veterinarianRepository,
  userLoginRepository
);

export const createLoginUseCase = new CreateLoginUseCase(
  userLoginRepository,
  createVeterinarianUseCase
);

export const getAllLoginsUseCase = new GetAllLoginsUseCase();
export const getUniqueUserUseCase = new GetUniqueUserUseCase();
export const autenticationUserUseCase = new AutenticationUserUseCase(
  userLoginRepository,
  veterinarianRepository
);
export const deleteLoginUseCase = new DeleteLoginUseCase(
  deleteVeterinarianUseCase
);

export const updateUserUseCase = new UpdateUserUseCase(
  userLoginRepository,
  veterinarianRepository
);

export const getExamsUseCase = new GetExamsUseCase(examsRepository);
export const createExamsUseCase = new CreateExamsUseCase(examsRepository);
export const deleteExamUseCase = new DeleteExamUseCase(examsRepository);
export const updateExamUseCase = new UpdateExamUseCase(examsRepository);

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

export const getAllSolicitationsUseCase = new GetAllSolicitationsUseCase(
  solicitationsRepository
);
export const createSolicitationsUseCase = new CreateSolicitationsUseCase(
  solicitationsRepository
);
export const addExamInSolicitationUseCase = new AddExamInSolicitationUseCase(
  examsInPetOnSolicitationsRepository
);
export const getAllExamsInPetOnSolicitationsUseCase =
  new GetAllExamsInPetOnSolicitationsUseCase(
    examsInPetOnSolicitationsRepository
  );
export const createExamsInPetOnSolicitationsUseCase =
  new CreateExamsInPetOnSolicitationsUseCase(
    examsInPetOnSolicitationsRepository
  );
export const deleteExamsInPetOnSolicitationsUseCase =
  new DeleteExamsInPetOnSolicitationsUseCase(
    examsInPetOnSolicitationsRepository
  );

export const getUniqueSolicitationsUseCase = new GetUniqueSolicitationsUseCase(
  solicitationsRepository
);

export const mailModel = new MailModel(
  process.env.MAILSERVICE as string,
  process.env.MAILADDRESS as string,
  process.env.MAILPASS as string
);

export const sendMailUseCase = new SendMailUseCase(mailModel);

export const finalizeSolicitationUseCase = new FinalizeSolicitationUseCase(
  solicitationsRepository,
  sendMailUseCase
);

export const sendMessageWithWhatsApp = new SendMessageWithWhatsApp();
