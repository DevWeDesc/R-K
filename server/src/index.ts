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
import PDFPerSolicitationUseCase from "./domain/useCases/Solicitations/PDFPerSolicitation/PDFPerSolicitationUseCase";
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
import { VeterinarianRepository } from "./infra/repositories/Veterinarian/VeterinarianRepository";
import TokenGenerate from "./utils/jwt/TokenGenerate";
import { UserLoginRepository } from "./infra/repositories/UserLogin/UserLoginRepository";
import { ForgetPasswordUseCase } from "./domain/useCases/Veterinarians/ForgetPassword/ForgetPasswordUseCase";
import VerifyCodeUseCase from "./domain/useCases/Veterinarians/ForgetPassword/VerifyCodeUseCase";
import EditPasswordUseCase from "./domain/useCases/Veterinarians/ForgetPassword/EditPasswordUseCase";
import GetExamsPerTypeUseCaseImpl from "./domain/useCases/Exams/GetExamsPerTypeUseCase";
import CreateExamsProfileUseCase from "./domain/useCases/ExamsProfile/CreateExamsProfileUseCase";
import DeleteExamProfileUseCase from "./domain/useCases/ExamsProfile/DeleteExamProfileUseCase";
import UpdateExamProfileUseCase from "./domain/useCases/ExamsProfile/UpdatedExamProfileUseCase";
import GetExamsProfileUseCase from "./domain/useCases/ExamsProfile/GetExamsProfileUseCase";
import ExamsProfileRepository from "./infra/repositories/ExamsProfile/ExamsProfileRepository";
import ExamsInExamProfileRepository from "./infra/repositories/ExamsInExamProfile/ExamsInExamProfileRepository";
import UpdateExamInExamProfileUseCase from "./domain/useCases/ExamsInExamProfile/UpdatedExamInExamProfileUseCase";
import GetExamsInExamProfileUseCase from "./domain/useCases/ExamsInExamProfile/GetExamsInExamProfileUseCase";
import DeleteExamInExamProfileUseCase from "./domain/useCases/ExamsInExamProfile/DeleteExamInExamProfileUseCase";
import CreateExamsInExamProfileUseCase from "./domain/useCases/ExamsInExamProfile/CreateExamsInExamProfileUseCase";
import GetAllExamsWithTypeUseCase from "./domain/useCases/Exams/GetAllExamsWithTypeUseCase";
import CreateManyExamsInExamsProfileUseCase from "./domain/useCases/ExamsInExamProfile/CreateManyExamsInExamsProfileUseCase";
import ExamsProfileInSolicitationRepository from "./infra/repositories/ExamsProfileInSolicitation/ExamsProfileInSolicitationRepository";
import GetUniqueExamProfileUseCase from "./domain/useCases/ExamsProfile/GetUniqueExamProfileUseCase";
import CreateExamsProfileInSolicitationUseCase from "./domain/useCases/ExamsProfileInSolicitation/CreateExamsProfileInSolicitationUseCase";
import GetExamsProfileInSolicitationUseCase from "./domain/useCases/ExamsProfileInSolicitation/GetExamsProfileInSolicitationUseCase";

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
const examsProfileRepository = new ExamsProfileRepository();
export const examsInExamProfileRepository = new ExamsInExamProfileRepository();
export const examsProfileInSolicitationRepository =
  new ExamsProfileInSolicitationRepository();

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
export const getExamsPerTypeUseCaseImpl = new GetExamsPerTypeUseCaseImpl(
  examsRepository
);

export const createManyExamsInExamsProfileUseCase =
  new CreateManyExamsInExamsProfileUseCase(
    examsInExamProfileRepository,
    examsProfileRepository,
    examsRepository
  );

export const getAllExamsWithTypeUseCase = new GetAllExamsWithTypeUseCase(
  examsRepository
);

export const createExamsProfileUseCase = new CreateExamsProfileUseCase(
  examsProfileRepository
);
export const getExamsProfileUseCase = new GetExamsProfileUseCase(
  examsProfileRepository
);

export const getUniqueExamProfileUseCase = new GetUniqueExamProfileUseCase(
  examsProfileRepository
);
export const deleteExamProfileUseCase = new DeleteExamProfileUseCase(
  examsProfileRepository
);
export const updateExamProfileUseCase = new UpdateExamProfileUseCase(
  examsProfileRepository
);

export const getExamsInExamProfileUseCase = new GetExamsInExamProfileUseCase(
  examsInExamProfileRepository
);
export const createExamsInExamProfileUseCase =
  new CreateExamsInExamProfileUseCase(
    examsInExamProfileRepository,
    examsProfileRepository,
    examsRepository
  );
export const updateExamInExamProfileUseCase =
  new UpdateExamInExamProfileUseCase(examsInExamProfileRepository);
export const deleteExamInExamProfileUseCase =
  new DeleteExamInExamProfileUseCase(examsInExamProfileRepository);

export const createExamsProfileInSolicitationUseCase =
  new CreateExamsProfileInSolicitationUseCase(
    examsProfileInSolicitationRepository,
    getUniqueExamProfileUseCase
  );

export const getExamsProfileInSolicitationUseCase =
  new GetExamsProfileInSolicitationUseCase(
    examsProfileInSolicitationRepository
  );

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

export const forgetPasswordUseCase = new ForgetPasswordUseCase(
  veterinarianRepository,
  sendMailUseCase
);

export const verifyCodeUseCase = new VerifyCodeUseCase(forgetPasswordUseCase);

export const editPasswordUseCase = new EditPasswordUseCase(
  forgetPasswordUseCase,
  veterinarianRepository,
  userLoginRepository
);

export const finalizeSolicitationUseCase = new FinalizeSolicitationUseCase(
  solicitationsRepository,
  sendMailUseCase
);

export const sendMessageWithWhatsApp = new SendMessageWithWhatsApp();

export const pdfPerSolicitationUseCase = new PDFPerSolicitationUseCase();
