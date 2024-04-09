import GroupRepository from "../../../infra/repositories/Groups/GroupRepository";

export default class GetGroupsUseCase {
  constructor(readonly groupsRepository: GroupRepository) {}
  async execute() {
    return await this.groupsRepository.listAll();
  }
}
