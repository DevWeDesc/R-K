import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import { IListExams } from "./IExams";

export interface IGenericTable {
  data: IListExams;
  additionalFields: additionalFieldsTableGenericEnum;
  setGuidIsVisible?: () => void;
}
