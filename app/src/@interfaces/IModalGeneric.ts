import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { ReactNode } from "react";

export interface IModalGeneric {
  variantButton: VariantsButtonEnum;
  textButtonActive: string;
  textTitle: string;
  textDescription: string;
  className?: string;
  children?: ReactNode;
  openModal: boolean;
  setModalOpen: (ev: boolean) => void;
}
