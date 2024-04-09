import { Groups } from "@prisma/client";
import { IGroupRequestDTO } from "../../../application/DTOs/GroupDTO/GroupRequestDTO";
import { IGenericRepository } from "../IGenericRepository";

export interface IGroupRepository
  extends IGenericRepository<IGroupRequestDTO, Groups> {
  getByName(name: string): Promise<Groups>;
}
