import { ClientsRequestDTO } from "../../../application/DTOs/ClientsDTO/ClientsRequestDTO";
import ClientsRepositories from "../../../infra/repositories/Clients/ClientsRepositories";
import { EmailValidator } from "../../../utils/ValidateEmail";
import EmailAlreadyUsedError from "../../errors/Clients/EmailAlreadyUsedError";
import EmailNotValidError from "../../errors/Clients/EmailNotValidError";
import PhoneAlreadyUsedError from "../../errors/Clients/PhoneAlreadyUsedError";

export default class CreateClientUseCase {
  constructor(readonly clientsRepositories: ClientsRepositories) {}
  async execute(clientRequest: ClientsRequestDTO) {
    const validateEmail = EmailValidator(clientRequest.email);
    if (!validateEmail) throw new EmailNotValidError();

    await this.clientsRepositories
      .findByEmail(clientRequest.email)
      .then((res) => {
        if (res) throw new EmailAlreadyUsedError();
      });

    await this.clientsRepositories
      .findByPhone(clientRequest.phone)
      .then((res) => {
        if (res) throw new PhoneAlreadyUsedError();
      });

    const clientCreatted = await this.clientsRepositories.create(clientRequest);

    return clientCreatted;
  }
}
