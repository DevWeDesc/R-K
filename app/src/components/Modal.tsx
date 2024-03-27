import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";

interface IModalGeneric {
  variantButton: VariantsButtonEnum;
  textButtonActive: string;
  textTitle: string;
  textDesciption: string;
  textCancelButton: string;
  textConfirmButton: string;
  functionOnClickButtonConfirm?: () => void;
  className?: string;
  children?: ReactNode;
  error?: boolean;
  isLoading?: boolean;
}

export function ModalGeneric({
  variantButton,
  textButtonActive,
  textTitle,
  textDesciption,
  textCancelButton,
  textConfirmButton,
  functionOnClickButtonConfirm,
  className,
  children,
  error,
  isLoading,
}: IModalGeneric) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = async (isButtonCancel: boolean) => {
    if (error && !isButtonCancel)
      toast.error("Verifique o Campo para Prosseguir!");
    else if (!error && !isButtonCancel && !isLoading) {
      setTimeout(() => {
        setOpenModal(false);
      }, 2000);
    } else setOpenModal(false);
  };

  return (
    <AlertDialog open={openModal} onOpenChange={setOpenModal}>
      <AlertDialogTrigger asChild>
        <Button
          className={`text-white font-semibold ${className}`}
          variant={variantButton}
        >
          {textButtonActive}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{textTitle}</AlertDialogTitle>
          <AlertDialogDescription>{textDesciption}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <Button
            onClick={() => handleCloseModal(true)}
            variant="ghost"
            className="border text-sm px-4 rounded-full"
          >
            {textCancelButton}
          </Button>
          {!isLoading ? (
            <Button
              onClick={() => {
                functionOnClickButtonConfirm && functionOnClickButtonConfirm();
                handleCloseModal(false);
              }}
              className="text-sm px-4"
            >
              {textConfirmButton}
            </Button>
          ) : (
            <Button disabled className="text-sm font-normal px-4">
              <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
              Por favor Aguarde
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
