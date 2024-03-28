import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { ReactNode } from "react";

export interface IModalGeneric {
  variantButton: VariantsButtonEnum;
  textButtonActive: string;
  textTitle: string;
  textDesciption: string;
  textPrimaryButton: string;
  textSecondaryButton: string;
  functionOnClickPrimaryButton?: () => void;
  functionOnClickSecondaryButton?: () => void;
  className?: string;
  children?: ReactNode;
  error?: boolean;
  isLoading?: boolean;
  inputIsValid?: boolean;
}
