import { IGroupModel } from "./Group";

export interface IExamsModel {
  id?: number;
  name: string;
  value: number;
  dedline: string;
  group?: IGroupModel;
  groupId: number;
}
