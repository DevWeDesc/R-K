import { IGroupModel } from "./Group";

export interface IExamsModel {
  id?: number;
  name: string;
  value: number;
  group?: IGroupModel;
  groupId: number;
}
