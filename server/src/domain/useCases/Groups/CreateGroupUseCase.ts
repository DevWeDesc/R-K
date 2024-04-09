import { IGroupRequestDTO } from "../../../application/DTOs/GroupDTO/GroupRequestDTO";
import GroupRepository from "../../../infra/repositories/Groups/GroupRepository";

export default class CreateGroupUseCase {
  constructor(readonly groupsRepository: GroupRepository) {}
  async execute(groupRequest: IGroupRequestDTO) {
    const groupNameVerify = await this.groupsRepository.getByName(
      groupRequest.name
    );
    if (groupNameVerify) throw new Error("O grupo informado já existe!");

    return await this.groupsRepository.create(groupRequest);
  }
}
