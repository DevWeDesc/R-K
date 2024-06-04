import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";

export interface IGenericTable {
  scrollForGuide?: () => void;
  headerTable?: string[];
  additionalFields: additionalFieldsTableGenericEnum;
  setGuidIsVisible?: () => void;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
