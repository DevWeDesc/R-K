import { IExamsModel } from "./Exams";

export interface IGroupModel {
  id?: number;
  name: string;
  preparing: JSON;
  exams: IExamsModel[];
}
