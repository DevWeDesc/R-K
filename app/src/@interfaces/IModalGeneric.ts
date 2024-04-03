import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { ReactNode } from "react";

export interface IModalGeneric {
  textTitle: string;
  textDescription: string;
  variantButton?: VariantsButtonEnum;
  textButtonActive?: string;
  className?: string;
  children?: ReactNode;
  openModal?: boolean;
  setModalOpen?: (ev: boolean) => void;
}
