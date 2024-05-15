"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  addExamInSolicitationUseCase: () => addExamInSolicitationUseCase,
  autenticationUserUseCase: () => autenticationUserUseCase,
  createCustomerUseCase: () => createCustomerUseCase,
  createExamsInPetOnSolicitationsUseCase: () => createExamsInPetOnSolicitationsUseCase,
  createExamsUseCase: () => createExamsUseCase,
  createGroupUseCase: () => createGroupUseCase,
  createLoginUseCase: () => createLoginUseCase,
  createPetUseCase: () => createPetUseCase,
  createSolicitationsUseCase: () => createSolicitationsUseCase,
  createVeterinarianUseCase: () => createVeterinarianUseCase,
  customerRepository: () => customerRepository,
  deleteExamUseCase: () => deleteExamUseCase,
  deleteExamsInPetOnSolicitationsUseCase: () => deleteExamsInPetOnSolicitationsUseCase,
  deleteLoginUseCase: () => deleteLoginUseCase,
  deleteVeterinarianUseCase: () => deleteVeterinarianUseCase,
  deletedCustomerUseCase: () => deletedCustomerUseCase,
  examsInPetOnSolicitationsRepository: () => examsInPetOnSolicitationsRepository,
  examsRepository: () => examsRepository,
  finalizeSolicitationUseCase: () => finalizeSolicitationUseCase,
  getAllCustomersUseCase: () => getAllCustomersUseCase,
  getAllExamsInPetOnSolicitationsUseCase: () => getAllExamsInPetOnSolicitationsUseCase,
  getAllLoginsUseCase: () => getAllLoginsUseCase,
  getAllPetsUseCase: () => getAllPetsUseCase,
  getAllSolicitationsUseCase: () => getAllSolicitationsUseCase,
  getAllVeterinariansUseCase: () => getAllVeterinariansUseCase,
  getExamsUseCase: () => getExamsUseCase,
  getGroupsUseCase: () => getGroupsUseCase,
  getPetsPerCustomerUseCase: () => getPetsPerCustomerUseCase,
  getSolicitationsByVeterinarian: () => getSolicitationsByVeterinarian,
  getUniqueCustomerUseCase: () => getUniqueCustomerUseCase,
  getUniqueSolicitationsUseCase: () => getUniqueSolicitationsUseCase,
  getUniqueUserUseCase: () => getUniqueUserUseCase,
  getUniqueVeterinarianUseCase: () => getUniqueVeterinarianUseCase,
  groupRepository: () => groupRepository,
  mailModel: () => mailModel,
  pdfModel: () => pdfModel,
  pdfPerSolicitationUseCase: () => pdfPerSolicitationUseCase,
  petsRepository: () => petsRepository,
  sendMailUseCase: () => sendMailUseCase,
  sendMessageWithWhatsApp: () => sendMessageWithWhatsApp,
  solicitationsRepository: () => solicitationsRepository,
  tokenGenerate: () => tokenGenerate,
  updateExamUseCase: () => updateExamUseCase,
  updateUserUseCase: () => updateUserUseCase,
  updatedCustomerUseCase: () => updatedCustomerUseCase,
  userLoginRepository: () => userLoginRepository,
  veterinarianRepository: () => veterinarianRepository
});
module.exports = __toCommonJS(src_exports);

// src/domain/models/mail/MailModel.ts
var nodeMailder = require("nodemailer");
var MailModel = class {
  constructor(service, userMail, PasswordMailUser) {
    this.service = service;
    this.userMail = userMail;
    this.PasswordMailUser = PasswordMailUser;
  }
  service;
  userMail;
  PasswordMailUser;
  getEmail() {
    return this.userMail;
  }
  createTransportMail() {
    const transporter = nodeMailder.createTransport({
      service: this.service,
      auth: {
        user: this.userMail,
        pass: this.PasswordMailUser
      }
    });
    return transporter;
  }
};

// src/domain/models/pdf/PdfModel.ts
var import_html_pdf = require("html-pdf");
var PdfModel = class {
  CreatePDF(pathFile, contentFile, nameFile) {
    (0, import_html_pdf.create)(contentFile, {}).toFile(
      `./src/infra/PDfs/${pathFile}/${nameFile}.pdf`,
      (err, res) => {
        if (err)
          console.log("erro ao criar pdf");
      }
    );
  }
};

// src/domain/errors/Customers/EmailAlreadyUsedError.ts
var EmailAlreadyUsedError = class extends Error {
  constructor() {
    super("J\xE1 existe um cliente com esse E-mail no sistema!");
    this.name = "EmailAlreadyUsedError";
  }
};

// src/domain/errors/Customers/PhoneAlreadyUsedError.ts
var PhoneAlreadyUsedError = class extends Error {
  constructor() {
    super("J\xE1 existe um cliente com esse Telefone no sistema!");
    this.name = "PhoneAlreadyUsedError";
  }
};

// src/domain/useCases/Customers/CreateCustomer/CreateCustomerUseCase.ts
var CreateCustomersUseCase = class {
  constructor(customerRepositories, getUniqueCustomerUseCase2) {
    this.customerRepositories = customerRepositories;
    this.getUniqueCustomerUseCase = getUniqueCustomerUseCase2;
  }
  async execute(customerRequestDTO) {
    const emailExists = await this.customerRepositories.findByEmail(
      customerRequestDTO.email
    );
    if (emailExists)
      throw new EmailAlreadyUsedError();
    await this.customerRepositories.findByPhone(customerRequestDTO.phone).then((res) => {
      if (res)
        throw new PhoneAlreadyUsedError();
    });
    await this.customerRepositories.findByCpf(customerRequestDTO.cpf).then((res) => {
      if (res)
        throw new Error("J\xE1 existe esse CPF no sistema!");
    });
    const clientCreatted = await this.customerRepositories.create(
      customerRequestDTO
    );
    return clientCreatted;
  }
};

// src/domain/useCases/Customers/DeletedCustomer/DeletedCustomerUseCase.ts
var DeletedCustomerUseCase = class {
  constructor(customerRepository2, getUniqueUserUseCase2) {
    this.customerRepository = customerRepository2;
    this.getUniqueUserUseCase = getUniqueUserUseCase2;
  }
  async execute(customerId) {
    await this.getUniqueUserUseCase.getcustomerById(customerId);
    await this.customerRepository.delete(customerId);
    return;
  }
};

// src/domain/useCases/Customers/GetAllCustomer/GetAllCustomersUseCase.ts
var GetAllCustomersUseCase = class {
  constructor(clientsRepositories, getUniqueCustomerUseCase2) {
    this.clientsRepositories = clientsRepositories;
    this.getUniqueCustomerUseCase = getUniqueCustomerUseCase2;
  }
  async execute(customerDTO) {
    if (customerDTO?.email)
      return await this.getUniqueCustomerUseCase.getCustomerByEmail(
        customerDTO?.email
      );
    if (customerDTO?.phone)
      return await this.getUniqueCustomerUseCase.getCustomerByPhone(
        customerDTO?.phone
      );
    return await this.clientsRepositories.listAll();
  }
};

// src/utils/ValidateEmail.ts
var EmailValidator = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// src/domain/errors/Customers/CustomerNotFoundError.ts
var CustomerNotFoundError = class extends Error {
  constructor() {
    super("O Cliente informado \xE9 inv\xE1lido!");
    this.name = "CustomerNotFoundError";
  }
};

// src/domain/errors/Customers/EmailNotValidError.ts
var EmailNotValidError = class extends Error {
  constructor() {
    super("O E-mail informado \xE9 inv\xE1lido, verifique se est\xE1 correto!");
    this.name = "EmailNotValidError";
  }
};

// src/domain/useCases/Customers/GetUniqueCustomer/GetUniqueUserUseCase.ts
var GetUniqueCustomerUseCase = class {
  constructor(customerRepository2) {
    this.customerRepository = customerRepository2;
  }
  async getcustomerById(id) {
    return await this.customerRepository.findById(id).then((res) => {
      if (!res)
        throw new CustomerNotFoundError();
      return res;
    });
  }
  async getCustomerByEmail(email) {
    const validateEmail = EmailValidator(email);
    if (!validateEmail)
      throw new EmailNotValidError();
    const userByEmail = await this.customerRepository.findByEmail(email);
    if (!userByEmail)
      throw new Error("O E-mail informado n\xE3o existe!");
    return userByEmail;
  }
  async getCustomerByPhone(phone) {
    return await this.customerRepository.findByPhone(phone);
  }
};

// src/domain/useCases/Customers/UpdatedCustomer/UpdatedCustomerUseCase.ts
var UpdatedCustomerUseCase = class {
  constructor(customerRepository2, getUniqueCustomerUseCase2) {
    this.customerRepository = customerRepository2;
    this.getUniqueCustomerUseCase = getUniqueCustomerUseCase2;
  }
  async execute(customerId, customerRequest) {
    const { email, phone } = customerRequest;
    const customerById = await this.getUniqueCustomerUseCase.getcustomerById(
      customerId
    );
    const searchIfEmailExists = await this.getUniqueCustomerUseCase.getCustomerByEmail(email);
    if (searchIfEmailExists) {
      if (customerById.email != searchIfEmailExists.email)
        throw new EmailAlreadyUsedError();
    }
    const searchIfPhoneExists = await this.getUniqueCustomerUseCase.getCustomerByPhone(phone);
    if (searchIfPhoneExists) {
      if (customerById.phone != searchIfPhoneExists.phone)
        throw new PhoneAlreadyUsedError();
    }
    const userUpdated = await this.customerRepository.update(
      customerId,
      customerRequest
    );
    return userUpdated;
  }
};

// src/utils/GeneratedID.ts
var GeneratedID = (minNumber, maxNumber) => {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(minNumber * maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

// src/domain/useCases/Exams/CreateExamsUseCase.ts
var CreateExamsUseCase = class {
  constructor(examsRepository2) {
    this.examsRepository = examsRepository2;
  }
  async execute(examRequest) {
    const { deadline, name, value } = examRequest;
    const validationName = await this.examsRepository.getByName(
      examRequest.name,
      1
    );
    if (validationName.length > 0)
      throw new Error("O Exame informado j\xE1 existe!");
    const allExams = await this.examsRepository.listAll();
    let idGenerated = GeneratedID(1e3, 1e5);
    allExams?.find(
      (exam) => exam.id === idGenerated ? idGenerated = GeneratedID(1e3, 1e5) : null
    );
    await this.examsRepository.create({
      id: idGenerated,
      deadline,
      name,
      value
    });
    return "Exame criado com sucesso!";
  }
};

// src/domain/useCases/Exams/DeleteExamUseCase.ts
var DeleteExamUseCase = class {
  constructor(examRepository) {
    this.examRepository = examRepository;
  }
  async execute(idExam) {
    const idExamIsValid = await this.examRepository.findById(idExam);
    if (!idExamIsValid)
      throw new Error("O exame informado n\xE3o existe!");
    return await this.examRepository.delete(idExam);
  }
};

// src/domain/useCases/Exams/GetExamsUseCase.ts
var GetExamsUseCase = class {
  constructor(examsRepository2) {
    this.examsRepository = examsRepository2;
  }
  async execute(name, id, pageActual) {
    if (id)
      return await this.examsRepository.findById(id);
    let exams = await this.examsRepository.listAll(pageActual);
    let numberPages = await this.examsRepository.countExams() / 10;
    if (name) {
      exams = await this.examsRepository.getByName(name, pageActual);
      numberPages = await this.examsRepository.countExams(name) / 10;
      return { exams, pageActual, numberPages };
    }
    return { exams, pageActual, numberPages };
  }
};

// src/domain/useCases/Exams/UpdatedExamUseCase.ts
var UpdateExamUseCase = class {
  constructor(examsRepository2) {
    this.examsRepository = examsRepository2;
  }
  async execute(idExam, examRequest) {
    const idExamIsValid = await this.examsRepository.findById(idExam);
    if (!idExamIsValid)
      throw new Error("Exame inv\xE1lido!");
    const { groupId, name, value } = examRequest;
    await this.examsRepository.update(idExam, { name, value, groupId });
    return { message: "Exame atualizado com sucesso!" };
  }
};

// src/domain/useCases/ExamsInPetOnSolicitations/CreateExamsInPetOnSolicitationsUseCase.ts
var CreateExamsInPetOnSolicitationsUseCase = class {
  constructor(examsInPetRepository) {
    this.examsInPetRepository = examsInPetRepository;
  }
  async execute(examsInPetRequest) {
    return await this.examsInPetRepository.create(examsInPetRequest);
  }
};

// src/domain/useCases/ExamsInPetOnSolicitations/DeleteExamsInPetOnSolicitationsUseCase.ts
var DeleteExamsInPetOnSolicitationsUseCase = class {
  constructor(examsInPetOnSolicitationsRepositories) {
    this.examsInPetOnSolicitationsRepositories = examsInPetOnSolicitationsRepositories;
  }
  async execute(idExam) {
    const examIsValid = await this.examsInPetOnSolicitationsRepositories.findById(idExam);
    if (!examIsValid)
      throw new Error("O Exame do pet informado n\xE3o \xE9 v\xE1lido!");
    await this.examsInPetOnSolicitationsRepositories.delete(idExam);
    return;
  }
};

// src/domain/useCases/ExamsInPetOnSolicitations/GetAllExamsInPetOnSolicitationsUseCase.ts
var GetAllExamsInPetOnSolicitationsUseCase = class {
  constructor(examsInPetRepository) {
    this.examsInPetRepository = examsInPetRepository;
  }
  async execute() {
    return await this.examsInPetRepository.listAll();
  }
};

// src/domain/useCases/Groups/CreateGroupUseCase.ts
var CreateGroupUseCase = class {
  constructor(groupsRepository) {
    this.groupsRepository = groupsRepository;
  }
  async execute(groupRequest) {
    const groupNameVerify = await this.groupsRepository.getByName(
      groupRequest.name
    );
    if (groupNameVerify)
      throw new Error("O grupo informado j\xE1 existe!");
    return await this.groupsRepository.create(groupRequest);
  }
};

// src/domain/useCases/Groups/GetGroupsUseCase.ts
var GetGroupsUseCase = class {
  constructor(groupsRepository) {
    this.groupsRepository = groupsRepository;
  }
  async execute() {
    return await this.groupsRepository.listAll();
  }
};

// src/domain/useCases/Mail/SendMailUseCase.ts
var SendMailUseCase = class {
  constructor(mailModel2) {
    this.mailModel = mailModel2;
  }
  async execute(receiverEmail) {
    const { subject, text, to, html, fileName, pathFile, contentFile } = receiverEmail;
    const transporter = await this.mailModel.createTransportMail();
    const sendEmailResponse = await transporter.sendMail({
      from: this.mailModel.getEmail(),
      to,
      subject,
      text,
      html,
      attachments: [
        {
          path: pathFile
        }
      ]
    });
    return sendEmailResponse;
  }
};

// src/domain/useCases/Pets/CreatePet/CreatePetUseCase.ts
var CreatePetUseCase = class {
  constructor(petsRepository2, getUniqueCustomerUseCase2) {
    this.petsRepository = petsRepository2;
    this.getUniqueCustomerUseCase = getUniqueCustomerUseCase2;
  }
  async execute(petRequest) {
    await this.getUniqueCustomerUseCase.getcustomerById(petRequest.customerId);
    const petCreated = await this.petsRepository.create(petRequest);
    return petCreated;
  }
};

// src/domain/useCases/Pets/GetAllPets/GetAllPetsUseCase.ts
var GetAllPetsUseCase = class {
  constructor(petsRepository2) {
    this.petsRepository = petsRepository2;
  }
  async execute() {
    return await this.petsRepository.listAll();
  }
};

// src/domain/useCases/Pets/GetPetsPerCustomer/GetPetsPerCustomerUseCase.ts
var GetPetsPerCustomerUseCase = class {
  constructor(petsRepository2, getUniqueCustomerUseCase2) {
    this.petsRepository = petsRepository2;
    this.getUniqueCustomerUseCase = getUniqueCustomerUseCase2;
  }
  async execute(customerId, nameOfPet) {
    const customer = await this.getUniqueCustomerUseCase.getcustomerById(
      customerId
    );
    const petsPerCustomer = await this.petsRepository.getPetsByCustomer(
      customerId
    );
    if (nameOfPet) {
      const petsFilteredByName = petsPerCustomer.filter(
        (pet) => pet.name.toLocaleLowerCase().includes(nameOfPet.toLocaleLowerCase())
      );
      if (petsFilteredByName.length === 0)
        return {
          message: "O Nome do pet informado n\xE3o existe!"
        };
      return { customer, pets: petsFilteredByName };
    }
    if (petsPerCustomer?.length === 0)
      return { message: "O cliente n\xE3o possui pet cadastrado at\xE9 o momento!" };
    return { customer, pets: petsPerCustomer };
  }
};

// src/domain/useCases/Solicitations/AddExamInSolicitation/AddExamInSolicitationUseCase.ts
var AddExamInSolicitationUseCase = class {
  constructor(examsInPetOnSolicitationsRepository2) {
    this.examsInPetOnSolicitationsRepository = examsInPetOnSolicitationsRepository2;
  }
  async exeute(examsInPetRequest) {
    this.examsInPetOnSolicitationsRepository.create(examsInPetRequest);
  }
};

// src/domain/useCases/Solicitations/CreateSolicitations/CreateSolicitationsUseCase.ts
var CreateSolicitationsUseCase = class {
  constructor(solicitationsRepository2) {
    this.solicitationsRepository = solicitationsRepository2;
  }
  async execute(solicitationRequest) {
    return await this.solicitationsRepository.create(solicitationRequest);
  }
};

// src/utils/FormatedDate.ts
var FormatedDate = (date, dateStyle, timeStyle) => {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle,
    timeStyle
  }).format(date);
};

// src/domain/models/mail/templates/HtmlFinalizedSolicitation.ts
var HtmlFinalizedSolicitation = (solicitationDetails) => {
  return `<body
  style="margin: 0; padding: 0; font-family: 'Times New Roman', Times, serif; position: relative;"
>
  <div style="margin: 6.5% 5%">
    <div style="width: 30%; text-align: center; margin: auto;">
      <img
        style="width: 100%; object-fit: contain; text-align: center;"
        src="https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
        alt=""
      />
    </div>
    <br />
    <br />
    <div style="border: 1px solid gray; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px; font-weight: bold;"> Solicita\xE7\xE3o de Exame</p>
      <br>
      <table style="width: 100%;">
        <tr>
          <td>  <p style="margin: 0 5px;"><strong>Nome do Tutor: </strong> ${solicitationDetails.pet.customer.name}</p></td>
          <td style="text-align: end;"><strong>Data e Hora:</strong> ${FormatedDate(
    /* @__PURE__ */ new Date(),
    "short",
    "medium"
  ).replace(",", " - ")}</td>
        </tr>
        <tr>
          <td colspan="2">
            <p style="margin: 0 5px;"><strong>CPF: </strong> ${solicitationDetails.pet.customer.cpf}</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <p style="margin: 0 5px;"><strong>E-mail: </strong> ${solicitationDetails.pet.customer.email}</p>
          </td>
        </tr>
      </table>
      <br>
      <table style="width: 100%;">
        <tr>
          <th style="text-align: left;"><p style="margin: 5px;">Dados do Pet:</p></th>
        </tr>
        <tr>
          <td>    
            <p style="margin: 0 5px;"><strong>Nome do Animal: </strong> ${solicitationDetails.pet.name}</p>
           </td>
          <td style="text-align: end;">
            <p style="margin: 0 5px;"><strong>Esp\xE9cie: </strong> ${solicitationDetails.pet.name}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="margin: 0 5px;"><strong>Idade: </strong> ${solicitationDetails.pet.age}</p>
          </td>
          <td style="text-align: end;"> 
            <p style="margin: 0 5px;"><strong>Sexo do Animal: </strong> ${solicitationDetails.pet.sex}</p>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <div style="border: 1px solid gray; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px;">
        <strong>Exames Solicitados</strong>
      </p>
      <br>
      ${solicitationDetails.exams.map(
    (exam) => `
              <p style="margin-bottom: 0;">
                - ${exam.Exams.name}
                <p style="margin: 0; padding: 0;"><strong style="margin: 0; padding: 0;">Preparo: </strong>${exam.Exams.preparing}</p>
              </p>
            `
  ).join(``)}
        <br>
        <p>
          <strong>Observa\xE7\xF5es:</strong> ${!solicitationDetails.observation ? "Sem observa\xE7\xF5es!" : solicitationDetails.observation}
        </p>
    </div>
  </div>
  <table style="font-size: 12px; width: 80%; margin: auto; margin-top: 50px">
    <tr>
      <tr>
        <td rowspan="5">
        <img style="width: 100px;" src="https://www.oficinadanet.com.br/media/post/2322/330/qrcode.png" alt="">
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin: 0;"><strong>RK Diagn\xF3stico</strong> \u2013 Acesso WhatsApp via QR Code</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Endere\xE7o:</strong> R. \xC1rtico, 248 - Jardim do Mar, S\xE3o Bernardo do Campo - SP, 09726-300</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Telefone:</strong> (11) 4122-3733</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Assinado digitalmente por:</strong> ${solicitationDetails.veterinarians.name} <strong>CRMV:</strong> ${solicitationDetails.veterinarians.crmv}</p>
        </td>
      </tr>
    </tr>
    <div>
    </div>
  </table>
</body>`;
};

// src/domain/models/mail/templates/HtmlMailContent.ts
var HtmlMailContent = `
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif">
  <div style="margin: 6.5% 5%">
    <img
      style="width: 25%; object-fit: contain; background-color: white;"
      src="https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
      alt=""
    />
    <br />
    <br />
    <div>
    <h3>Os procedimentos foram realizados com sucesso!</h3>
    <br>
    <p>Mandamos dois pdfs para esse E-mail, um pdf contendo os dados da guia que cont\xE9m: Data de Realiza\xE7\xE3o, dados do animal, observa\xE7\xF5es e dados do Veterin\xE1rio.</p>
    <p>O segundo pdf cont\xE9m o preparo para os exames, os preparos devem ser seguidos para realizarmos os exames da melhor maneira possivel com os melhores resultados!</p>
  </div>
</body>
`;

// src/domain/useCases/WhatsApp/FormatterMessageFromWhatsApp.ts
var FormatterMessageFromWhatsApp = (solicitationModel, pdfName) => {
  return `
*Nome do Tutor*: ${solicitationModel.pet.customer.name}
*Data e Hora*: ${FormatedDate(/* @__PURE__ */ new Date(), "short", "medium")}
*CPF*: ${solicitationModel.pet.customer.cpf}
*E-mail*: ${solicitationModel.pet.customer.email}

*Dados do Pet*
*Nome*: ${solicitationModel.pet.name}        *Esp\xE9cie*: ${solicitationModel.pet.specie}
*Idade*: ${solicitationModel.pet.age}        *Sexo do animal*: ${solicitationModel.pet.sex}

*Exames Solicitados*

${solicitationModel.exams.map(
    (exam) => `
*Exame:* ${exam.Exams.name}
*Preparo*: ${exam.Exams.preparing}
`
  ).join(``)}

*Observa\xE7\xF5es*: ${!solicitationModel.observation ? "Sem observa\xE7\xF5es!" : solicitationModel.observation}

*Guia gerada com sucesso na R&K para o pet ${solicitationModel.pet.name}!*
Segue o link da Guia: *http://localhost:3333/solicitations/pdf/${pdfName}*
`;
};

// src/domain/useCases/Solicitations/FinalizeSolicitation/FinalizeSolicitationUseCase.ts
var FinalizeSolicitationUseCase = class {
  constructor(solicitationRepository, sendMailUseCase2) {
    this.solicitationRepository = solicitationRepository;
    this.sendMailUseCase = sendMailUseCase2;
  }
  async execute(idSolicitation, emailVeterinarian, observation) {
    const solicitationById = await this.solicitationRepository.findById(idSolicitation);
    if (!solicitationById)
      throw new Error("A solicita\xE7\xE3o informada \xE9 inv\xE1lida!");
    const dateFinished = /* @__PURE__ */ new Date();
    const slugForSolicitation = `Guia-${solicitationById.pet.name}-${FormatedDate(dateFinished, "short", "medium").replaceAll("/", "-").replaceAll(", ", "_").replaceAll(":", "-")}`;
    await this.solicitationRepository.update(idSolicitation, {
      isFinished: true,
      finishedIn: dateFinished,
      slug: slugForSolicitation,
      observation
    });
    await pdfModel.CreatePDF(
      "Guide",
      HtmlFinalizedSolicitation(solicitationById),
      slugForSolicitation
    );
    setTimeout(async () => {
      const dataSendEmail = {
        to: ` 
          r.k.ofc2@gmail.com,
          ${solicitationById.pet.customer.email},
          ${emailVeterinarian && emailVeterinarian}
        `,
        subject: `Finaliza\xE7\xE3o Guia RK do Pet ${solicitationById.pet.name}`,
        html: HtmlMailContent,
        pathFile: `./src/infra/PDFs/Guide/${slugForSolicitation}.pdf`
      };
      await sendMessageWithWhatsApp.execute(
        `${FormatterMessageFromWhatsApp(
          solicitationById,
          slugForSolicitation
        )}`,
        `+55${solicitationById.pet.customer.phone}`,
        "https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
      );
      await this.sendMailUseCase.execute(dataSendEmail).catch((err) => {
        throw new Error(err);
      });
    }, 2e3);
    return {
      message: "Solicita\xE7\xE3o finalizada com sucesso, para verificar acesse seu Email!"
    };
  }
};

// src/domain/useCases/Solicitations/GetAllSolicitations/GetAllSolicitationsUseCase.ts
var GetAllSolicitationsUseCase = class {
  constructor(solicitationsRepository2) {
    this.solicitationsRepository = solicitationsRepository2;
  }
  async execute() {
    return await this.solicitationsRepository.listAll();
  }
};

// src/utils/FormatedValueForCurrent.ts
var FormatedValueForCurrent = (value) => {
  return Intl.NumberFormat("sp-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};

// src/domain/errors/Solicitations/SolicitationsNotFound.ts
var SolicitationsNotFoundError = class extends Error {
  constructor() {
    super("A Guia informada \xE9 inv\xE1lida!");
    this.name = "SolicitationsNotFoundError";
  }
};

// src/domain/useCases/Solicitations/GetUniqueSolicitation/GetUniqueSolicitationsUseCase.ts
var GetUniqueSolicitationsUseCase = class {
  constructor(solicitationRepository) {
    this.solicitationRepository = solicitationRepository;
  }
  async execute(idSolicitation) {
    const solicitationsDetails = await this.solicitationRepository.findById(idSolicitation);
    if (!solicitationsDetails)
      throw new SolicitationsNotFoundError();
    let total = 0;
    if (solicitationsDetails?.exams) {
      total = solicitationsDetails.exams.reduce(
        (accumulator, solicitation) => accumulator + solicitation.Exams.value,
        0
      );
    }
    return { solicitationsDetails, total: FormatedValueForCurrent(total) };
  }
};

// src/domain/useCases/Solicitations/PDFPerSolicitation/PDFPerSolicitationUseCase.ts
var fs = require("fs");
var PDFPerSolicitationUseCase = class {
  constructor() {
  }
  async execute(namePdf) {
    const pathFile = `./src/infra/PDFs/Guide/${namePdf}.pdf`;
    if (!fs.existsSync(pathFile))
      throw new Error("Arquivo n\xE3o encontrado");
    return fs.readFileSync(pathFile);
  }
};

// src/domain/useCases/UsersLogin/AutenticationUserUseCase.ts
var import_bcrypt = require("bcrypt");
var AutenticationUserUseCase = class {
  constructor(userLoginRepository2, veterinarianRepository2) {
    this.userLoginRepository = userLoginRepository2;
    this.veterinarianRepository = veterinarianRepository2;
  }
  async execute(crmv, email, password) {
    const userByEmail = await this.veterinarianRepository.getByEmail(email);
    if (!userByEmail)
      throw new Error("Usu\xE1rio ou senha inv\xE1lido!");
    if (userByEmail.crmv != crmv)
      throw new Error("CRMV inv\xE1lido!");
    const passwordLoginVet = userByEmail.veterinarianLogin && userByEmail.veterinarianLogin.password;
    const passwordIsValid = await (0, import_bcrypt.compare)(
      password,
      passwordLoginVet ? passwordLoginVet : ""
    );
    if (!passwordIsValid)
      throw new Error("Usu\xE1rio ou senha inv\xE1lido!");
    if (userByEmail.veterinarianLogin?.id) {
      let { id, roleUser, password: password2 } = userByEmail.veterinarianLogin;
      const userData = {
        id: parseInt(id.toString()),
        roleUser,
        password: password2
      };
      const token = await tokenGenerate.execute(userData, userByEmail);
      const user = {
        id,
        roleUser,
        email,
        crmv
      };
      const tokenInformations = {
        token,
        user
      };
      return {
        message: "Usu\xE1rio logado com sucesso!",
        tokenInformations
      };
    }
  }
};

// src/domain/useCases/UsersLogin/CreateLoginUseCase.ts
var import_bcrypt2 = require("bcrypt");
var import_crypto = require("crypto");
var CreateLoginUseCase = class {
  constructor(userLoginRepository2, createVeterinarianUseCase2) {
    this.userLoginRepository = userLoginRepository2;
    this.createVeterinarianUseCase = createVeterinarianUseCase2;
  }
  async execute(VeterinarianRequestDTO, LoginRequestDTO) {
    const { password, roleUser } = LoginRequestDTO;
    const { crmv, email } = VeterinarianRequestDTO;
    const randomSalt = (0, import_crypto.randomInt)(10, 16);
    const passwordHashed = await (0, import_bcrypt2.hash)(password, randomSalt);
    if (!EmailValidator(email))
      throw new EmailNotValidError();
    await this.createVeterinarianUseCase.validationEmailExists(email);
    await this.createVeterinarianUseCase.validationCRMVExists(crmv);
    await this.userLoginRepository.create({ password: passwordHashed, roleUser }).then(
      async (res) => await this.createVeterinarianUseCase.execute(
        VeterinarianRequestDTO,
        res.id
      )
    );
    return "Usu\xE1rio criado com sucesso!";
  }
};

// src/domain/useCases/UsersLogin/DeleteLoginUseCase.ts
var DeleteLoginUseCase = class {
  constructor(deleteVeterinarianUseCase2) {
    this.deleteVeterinarianUseCase = deleteVeterinarianUseCase2;
  }
  async execute(idUser) {
    await this.deleteVeterinarianUseCase.execute(idUser);
    return;
  }
};

// src/lib/prismaClient.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/domain/useCases/UsersLogin/GetAllUsersUseCase.ts
var GetAllLoginsUseCase = class {
  async execute() {
    const allLogins = await prisma.usersLogin.findMany({
      include: { veterinarians: true }
    });
    return allLogins;
  }
};

// src/domain/useCases/UsersLogin/GetUniqueUserUseCase.ts
var GetUniqueUserUseCase = class {
  constructor() {
  }
  async execute(id) {
    return "id";
  }
};

// src/domain/useCases/UsersLogin/UpdateUserUseCase.ts
var import_bcrypt3 = require("bcrypt");
var import_crypto2 = require("crypto");
var UpdateUserUseCase = class {
  constructor(userLoginRepository2, veterinarianRepository2) {
    this.userLoginRepository = userLoginRepository2;
    this.veterinarianRepository = veterinarianRepository2;
  }
  async execute(id, VeterinarianRequestDTO, LoginRequestDTO) {
    const userbyId = await prisma.usersLogin.findUnique({ where: { id } });
    if (!userbyId)
      throw new Error("Usu\xE1rio inserido n\xE3o \xE9 valido!");
    const randomSalt = (0, import_crypto2.randomInt)(10, 16);
    const passwordHashed = await (0, import_bcrypt3.hash)(userbyId.password, randomSalt);
    LoginRequestDTO.password = passwordHashed;
    await prisma.usersLogin.update({ where: { id }, data: LoginRequestDTO });
    await prisma.veterinarians.update({
      where: { id },
      data: VeterinarianRequestDTO
    });
    return { message: "Usu\xE1rio editado com sucesso!" };
  }
};

// src/domain/useCases/Veterinarians/CreateVeterinarianUseCase.ts
var CreateVeterinarianUseCase = class {
  constructor(veterinarianRepository2) {
    this.veterinarianRepository = veterinarianRepository2;
  }
  async validationEmailExists(email) {
    const emailExists = await this.veterinarianRepository.getByEmail(email);
    if (emailExists)
      throw new Error("J\xE1 existe uma conta com esse E-mail!");
  }
  async validationCRMVExists(crmv) {
    const crmvExists = await this.veterinarianRepository.getByCRMV(crmv);
    if (crmvExists)
      throw new Error("O CRMV J\xE1 est\xE1 em uso!");
  }
  async execute(veterinarianRequest, userLoginID) {
    const { crmv, email, name, phone, state } = veterinarianRequest;
    await this.validationEmailExists(email);
    await this.validationCRMVExists(crmv);
    return await this.veterinarianRepository.create({
      crmv,
      email,
      name,
      phone,
      state,
      usersLoginId: userLoginID
    });
  }
};

// src/domain/errors/VeterinarianError/VeterinarianNotFoundError.ts
var VeterinarianNotFoundError = class extends Error {
  constructor() {
    super("Veterin\xE1rio n\xE3o encontrado!");
    this.name = "VeterinarianNotFoundError";
  }
};

// src/domain/useCases/Veterinarians/DeleteVeterinarianUseCase.ts
var DeleteVeterinarianUseCase = class {
  constructor(veterinarianRepository2, userLoginRepository2) {
    this.veterinarianRepository = veterinarianRepository2;
    this.userLoginRepository = userLoginRepository2;
  }
  async execute(idVeterinarian) {
    const idIsValid = await this.veterinarianRepository.findById(
      idVeterinarian
    );
    if (!idIsValid)
      throw new VeterinarianNotFoundError();
    await this.veterinarianRepository.delete(idVeterinarian);
    await this.userLoginRepository.delete(idVeterinarian);
    return;
  }
};

// src/domain/useCases/Veterinarians/GetAllVeterinariansUseCase.ts
var GetAllVeterinariansUseCase = class {
  constructor(veterinarianRepository2) {
    this.veterinarianRepository = veterinarianRepository2;
  }
  async execute(email, crmv, id) {
    switch (true) {
      case !!email:
        return await this.veterinarianRepository.getByEmail(email).then((res) => {
          if (!res)
            throw new VeterinarianNotFoundError();
          return res;
        });
      case !!crmv:
        return await this.veterinarianRepository.getByCRMV(crmv).then((res) => {
          if (!res)
            throw new VeterinarianNotFoundError();
          return res;
        });
      case !!id:
        return await this.veterinarianRepository.findById(parseInt(id)).then((res) => {
          if (!res)
            throw new VeterinarianNotFoundError();
          return res;
        });
    }
    return await this.veterinarianRepository.listAll();
  }
};

// src/domain/useCases/Veterinarians/GetSolicitationsByVeterinarian.ts
var GetSolicitationsByVeterinarian = class {
  constructor(veterinarianRepository2) {
    this.veterinarianRepository = veterinarianRepository2;
  }
  async execute() {
    return this.veterinarianRepository.getSolicitationsByVeterinarian();
  }
};

// src/domain/useCases/Veterinarians/GetUniqueVeterinarianUseCase.ts
var GetUniqueVeterinarianUseCase = class {
  constructor(veterinarianRepository2) {
    this.veterinarianRepository = veterinarianRepository2;
  }
  async byCRMV(CRMV) {
    const vetByCRMV = await this.veterinarianRepository.getByCRMV(CRMV);
    if (!vetByCRMV)
      throw new Error("O CRMV informado \xE9 inv\xE1lido");
    return vetByCRMV;
  }
  async byEmail(email) {
    const vetByEmail = await this.veterinarianRepository.getByEmail(email);
    if (!vetByEmail)
      throw new Error("E-mail inv\xE1lido!");
    return vetByEmail;
  }
  async byId(id) {
    const vetById = await this.veterinarianRepository.findById(id);
    if (!vetById)
      throw new Error("Veterin\xE1rio inv\xE1lido!");
    return vetById;
  }
};

// src/domain/useCases/WhatsApp/SendMessageWithWhatsApp.ts
var twilioClient = require("twilio")(
  process.env.ACCOUNTSIDWHATS,
  process.env.AUTHTOKENWHATS
);
var SendMessageWithWhatsApp = class {
  async execute(message, numberReceiver, pathMedia) {
    numberReceiver = numberReceiver.replace(/[()\s]/g, "").replace(" ", "");
    await twilioClient.messages.create({
      mediaUrl: [pathMedia],
      body: message,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${numberReceiver}`
    }).catch((err) => {
      console.log(err);
      throw new Error("Erro ao enviar WhatsApp!");
    });
  }
};

// src/infra/repositories/Customers/CustomerRepository.ts
var CustomerRepository = class {
  async findByCpf(cpf) {
    return await prisma.customers.findUnique({ where: { cpf } });
  }
  async findByEmail(email) {
    return await prisma.customers.findUnique({
      where: { email },
      include: { pets: true }
    });
  }
  async findByPhone(phone) {
    return await prisma.customers.findUnique({
      where: { phone },
      include: { pets: true }
    });
  }
  async update(id, entity) {
    const clientUpdated = await prisma.customers.update({
      where: { id: parseInt(id.toString()) },
      data: entity
    });
    return clientUpdated;
  }
  async findById(id) {
    return await prisma.customers.findUnique({
      where: { id: parseInt(id.toString()) },
      include: { pets: true }
    });
  }
  async listAll() {
    return await prisma.customers.findMany();
  }
  async create(entity) {
    const clientCreated = await prisma.customers.create({ data: entity });
    return clientCreated;
  }
  async delete(id) {
    await prisma.customers.delete({ where: { id: parseInt(id.toString()) } });
    return true;
  }
};

// src/infra/repositories/Exams/ExamsRepository.ts
var ExamsRepository = class {
  async getByName(name, pageActual) {
    return await prisma.exams.findMany({
      where: { name: { contains: name } },
      skip: pageActual ? (pageActual - 1) * 10 : 0,
      take: 10
    });
  }
  async findById(id) {
    return await prisma.exams.findUnique({
      where: { id: parseInt(id.toString()) }
    });
  }
  async listAll(pageActual) {
    return await prisma.exams.findMany({
      include: { group: true },
      skip: pageActual && (pageActual - 1) * 10,
      take: 10
    });
  }
  async countExams(name) {
    return await prisma.exams.count({ where: { name: { contains: name } } });
  }
  async create(entity) {
    return await prisma.exams.create({ data: entity });
  }
  async update(id, entity) {
    return await prisma.exams.update({
      where: { id: parseInt(id.toString()) },
      data: entity
    });
  }
  async delete(id) {
    try {
      await prisma.exams.delete({
        where: { id: parseInt(id.toString()) }
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

// src/infra/repositories/ExamsInPetOnSolicitations/ExamsInPetOnSolicitationsRepository.ts
var ExamsInPetOnSolicitationsRepository = class {
  async update(id, entity) {
    throw new Error("Method not implemented.");
  }
  async findById(id) {
    return await prisma.examsInPetOnSolicitations.findUnique({
      where: { id: parseInt(id.toString()) }
    });
  }
  async listAll() {
    return await prisma.examsInPetOnSolicitations.findMany({
      include: { Exams: true, Solicitations: true }
    });
  }
  async create(entity) {
    return await prisma.examsInPetOnSolicitations.create({ data: entity });
  }
  async delete(id) {
    try {
      await prisma.examsInPetOnSolicitations.delete({
        where: { id: parseInt(id.toString()) }
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

// src/infra/repositories/Groups/GroupRepository.ts
var GroupRepository = class {
  async getByName(name) {
    const groupName = await prisma.groups.findFirst({ where: { name } });
    return groupName;
  }
  async update(id, entity) {
    throw new Error("Method not implemented.");
  }
  async findById(id) {
    return await prisma.groups.findUnique({
      where: { id: parseInt(id.toString()) }
    });
  }
  async listAll() {
    return await prisma.groups.findMany();
  }
  async create(entity) {
    return await prisma.groups.create({ data: entity });
  }
  async delete(id) {
    throw new Error("Method not implemented.");
  }
};

// src/infra/repositories/Pets/PetsRepository.ts
var PetsRepository = class {
  async getPetByName(name) {
    return await prisma.pets.findMany({ where: { name: { contains: name } } });
  }
  async getPetsByCustomer(customerId) {
    return await prisma.pets.findMany({
      where: { customerId },
      include: { customer: true }
    });
  }
  async update(id, entity) {
    return await prisma.pets.update({
      where: { id: parseInt(id.toString()) },
      data: {
        customerId: entity.customerId,
        name: entity.name,
        specie: entity.specie
      }
    });
  }
  async findById(id) {
    return await prisma.pets.findUnique({
      where: { id: parseInt(id.toString()) }
    });
  }
  async listAll() {
    return await prisma.pets.findMany();
  }
  async create(entity) {
    return await prisma.pets.create({ data: entity });
  }
  async delete(id) {
    await prisma.pets.delete({ where: { id: parseInt(id.toString()) } });
    return true;
  }
};

// src/infra/repositories/Solicitations/SolicitationsRepository.ts
var SolicitationsRepository = class {
  async update(id, entity) {
    return await prisma.solicitations.update({
      where: { id: id.toString() },
      data: entity
    });
  }
  async findById(id) {
    return await prisma.solicitations.findUnique({
      where: { id: id.toString() },
      include: {
        pet: { include: { customer: true } },
        veterinarians: true,
        exams: { include: { Exams: true } }
      }
    });
  }
  async listAll() {
    return await prisma.solicitations.findMany({
      include: {
        veterinarians: true,
        pet: true
      }
    });
  }
  async create(entity) {
    return await prisma.solicitations.create({ data: entity });
  }
  async delete(id) {
    await prisma.solicitations.delete({ where: { id: id.toString() } });
    return true;
  }
};

// src/infra/repositories/UserLogin/UserLoginRepository.ts
var UserLoginRepository = class {
  async listAll() {
    return await prisma.usersLogin.findMany();
  }
  async update(id, entity) {
    let userById = await this.findById(id);
    userById = entity;
    await prisma.usersLogin.update({
      where: { id: parseInt(id.toString()) },
      data: userById
    });
    return userById;
  }
  async findById(id) {
    const userByID = await prisma.usersLogin.findUnique({
      where: { id: parseInt(id.toString()) }
    });
    if (!userByID)
      throw new Error("O usu\xE1rio informado n\xE3o existe!");
    return userByID;
  }
  async create(entity) {
    const { password, roleUser } = entity;
    const userCreated = await prisma.usersLogin.create({
      data: { password, roleUser }
    });
    return userCreated;
  }
  async delete(id) {
    try {
      await prisma.usersLogin.delete({
        where: {
          id: parseInt(id.toString())
        }
      });
      return true;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
};

// src/infra/repositories/Veterinarian/VeterinarianRepository.ts
var VeterinarianRepository = class {
  async getSolicitationsByVeterinarian() {
    return await prisma.veterinarians.findMany({
      include: {
        solicitations: { include: { pet: { include: { customer: true } } } },
        _count: true
      }
    });
  }
  async listAll() {
    return await prisma.veterinarians.findMany();
  }
  async getByEmail(email) {
    const getUserByEmail = await prisma.veterinarians.findUnique({
      where: { email },
      include: { veterinarianLogin: true }
    });
    return getUserByEmail;
  }
  async getByCRMV(crmv) {
    const getUserByCRMV = await prisma.veterinarians.findUnique({
      where: { crmv }
    });
    return getUserByCRMV;
  }
  async update(id, entity) {
    const vetById = await this.findById(id);
    if (!vetById)
      throw new Error("O Veterin\xE1rio informado n\xE3o existe!!");
    const vetAttualized = await prisma.veterinarians.update({
      where: { id: parseInt(id.toString()) },
      data: entity
    });
    return vetAttualized;
  }
  async findById(id) {
    const vetById = await prisma.veterinarians.findUnique({
      where: { id: parseInt(id.toString()) }
    });
    return vetById;
  }
  async create(entity) {
    const { crmv, email, name, phone, state, usersLoginId } = entity;
    const veterinarianCreated = await prisma.veterinarians.create({
      data: { crmv, email, name, phone, state, usersLoginId }
    });
    return veterinarianCreated;
  }
  async delete(id) {
    try {
      await prisma.veterinarians.delete({
        where: { id: parseInt(id.toString()) }
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

// src/utils/jwt/TokenGenerate.ts
var import_jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();
var TokenGenerate = class {
  constructor() {
  }
  async execute(user, veterinarian) {
    const { id, roleUser } = user;
    const { email, crmv, name } = veterinarian;
    const token = (0, import_jsonwebtoken.sign)(
      { id, roleUser, email, crmv, name },
      process.env.SECRET,
      {
        expiresIn: "15d"
      }
    );
    return token;
  }
};

// src/index.ts
var userLoginRepository = new UserLoginRepository();
var veterinarianRepository = new VeterinarianRepository();
var examsRepository = new ExamsRepository();
var groupRepository = new GroupRepository();
var customerRepository = new CustomerRepository();
var petsRepository = new PetsRepository();
var solicitationsRepository = new SolicitationsRepository();
var examsInPetOnSolicitationsRepository = new ExamsInPetOnSolicitationsRepository();
var pdfModel = new PdfModel();
var tokenGenerate = new TokenGenerate();
var createVeterinarianUseCase = new CreateVeterinarianUseCase(
  veterinarianRepository
);
var getUniqueVeterinarianUseCase = new GetUniqueVeterinarianUseCase(
  veterinarianRepository
);
var getAllVeterinariansUseCase = new GetAllVeterinariansUseCase(
  veterinarianRepository
);
var getSolicitationsByVeterinarian = new GetSolicitationsByVeterinarian(veterinarianRepository);
var deleteVeterinarianUseCase = new DeleteVeterinarianUseCase(
  veterinarianRepository,
  userLoginRepository
);
var createLoginUseCase = new CreateLoginUseCase(
  userLoginRepository,
  createVeterinarianUseCase
);
var getAllLoginsUseCase = new GetAllLoginsUseCase();
var getUniqueUserUseCase = new GetUniqueUserUseCase();
var autenticationUserUseCase = new AutenticationUserUseCase(
  userLoginRepository,
  veterinarianRepository
);
var deleteLoginUseCase = new DeleteLoginUseCase(
  deleteVeterinarianUseCase
);
var updateUserUseCase = new UpdateUserUseCase(
  userLoginRepository,
  veterinarianRepository
);
var getExamsUseCase = new GetExamsUseCase(examsRepository);
var createExamsUseCase = new CreateExamsUseCase(examsRepository);
var deleteExamUseCase = new DeleteExamUseCase(examsRepository);
var updateExamUseCase = new UpdateExamUseCase(examsRepository);
var createGroupUseCase = new CreateGroupUseCase(groupRepository);
var getGroupsUseCase = new GetGroupsUseCase(groupRepository);
var getUniqueCustomerUseCase = new GetUniqueCustomerUseCase(
  customerRepository
);
var createCustomerUseCase = new CreateCustomersUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);
var getAllCustomersUseCase = new GetAllCustomersUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);
var updatedCustomerUseCase = new UpdatedCustomerUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);
var deletedCustomerUseCase = new DeletedCustomerUseCase(
  customerRepository,
  getUniqueCustomerUseCase
);
var getAllPetsUseCase = new GetAllPetsUseCase(petsRepository);
var createPetUseCase = new CreatePetUseCase(
  petsRepository,
  getUniqueCustomerUseCase
);
var getPetsPerCustomerUseCase = new GetPetsPerCustomerUseCase(
  petsRepository,
  getUniqueCustomerUseCase
);
var getAllSolicitationsUseCase = new GetAllSolicitationsUseCase(
  solicitationsRepository
);
var createSolicitationsUseCase = new CreateSolicitationsUseCase(
  solicitationsRepository
);
var addExamInSolicitationUseCase = new AddExamInSolicitationUseCase(
  examsInPetOnSolicitationsRepository
);
var getAllExamsInPetOnSolicitationsUseCase = new GetAllExamsInPetOnSolicitationsUseCase(
  examsInPetOnSolicitationsRepository
);
var createExamsInPetOnSolicitationsUseCase = new CreateExamsInPetOnSolicitationsUseCase(
  examsInPetOnSolicitationsRepository
);
var deleteExamsInPetOnSolicitationsUseCase = new DeleteExamsInPetOnSolicitationsUseCase(
  examsInPetOnSolicitationsRepository
);
var getUniqueSolicitationsUseCase = new GetUniqueSolicitationsUseCase(
  solicitationsRepository
);
var mailModel = new MailModel(
  process.env.MAILSERVICE,
  process.env.MAILADDRESS,
  process.env.MAILPASS
);
var sendMailUseCase = new SendMailUseCase(mailModel);
var finalizeSolicitationUseCase = new FinalizeSolicitationUseCase(
  solicitationsRepository,
  sendMailUseCase
);
var sendMessageWithWhatsApp = new SendMessageWithWhatsApp();
var pdfPerSolicitationUseCase = new PDFPerSolicitationUseCase();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addExamInSolicitationUseCase,
  autenticationUserUseCase,
  createCustomerUseCase,
  createExamsInPetOnSolicitationsUseCase,
  createExamsUseCase,
  createGroupUseCase,
  createLoginUseCase,
  createPetUseCase,
  createSolicitationsUseCase,
  createVeterinarianUseCase,
  customerRepository,
  deleteExamUseCase,
  deleteExamsInPetOnSolicitationsUseCase,
  deleteLoginUseCase,
  deleteVeterinarianUseCase,
  deletedCustomerUseCase,
  examsInPetOnSolicitationsRepository,
  examsRepository,
  finalizeSolicitationUseCase,
  getAllCustomersUseCase,
  getAllExamsInPetOnSolicitationsUseCase,
  getAllLoginsUseCase,
  getAllPetsUseCase,
  getAllSolicitationsUseCase,
  getAllVeterinariansUseCase,
  getExamsUseCase,
  getGroupsUseCase,
  getPetsPerCustomerUseCase,
  getSolicitationsByVeterinarian,
  getUniqueCustomerUseCase,
  getUniqueSolicitationsUseCase,
  getUniqueUserUseCase,
  getUniqueVeterinarianUseCase,
  groupRepository,
  mailModel,
  pdfModel,
  pdfPerSolicitationUseCase,
  petsRepository,
  sendMailUseCase,
  sendMessageWithWhatsApp,
  solicitationsRepository,
  tokenGenerate,
  updateExamUseCase,
  updateUserUseCase,
  updatedCustomerUseCase,
  userLoginRepository,
  veterinarianRepository
});
