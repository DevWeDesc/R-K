import ClientsRepositories from "../../../infra/repositories/Clients/ClientsRepositories";

export default class GetAllClientsUseCase {
  constructor(readonly clientsRepositories: ClientsRepositories) {}

  async execute() {
    return await this.clientsRepositories.listAll();
  }
}
