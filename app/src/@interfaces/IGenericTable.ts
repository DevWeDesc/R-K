import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";

export interface IGenericTable {
  headerTable?: string[];
  additionalFields: additionalFieldsTableGenericEnum;
  setGuidIsVisible?: () => void;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
