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
import { useState } from "react";
import { toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { IModalGeneric } from "@/@interfaces/IModalGeneric";

export function ModalGeneric({
  variantButton,
  textButtonActive,
  textTitle,
  textDesciption,
  textPrimaryButton,
  textSecondaryButton,
  functionOnClickPrimaryButton,
  functionOnClickSecondaryButton,
  className,
  children,
  error,
  isLoading,
  inputIsValid,
}: IModalGeneric) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = async (isButtonCancel: boolean) => {
    if (error && !isButtonCancel)
      toast.error("Verifique o Campo para Prosseguir!");
    else if (!isButtonCancel && !inputIsValid) {
    } else if (!error && !isButtonCancel && !isLoading && inputIsValid) {
      setTimeout(() => {
        setOpenModal(false);
      }, 1800);
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
          <AlertDialogTitle className="relative">
            {textTitle}{" "}
            <IoIosClose
              onClick={() => setOpenModal(false)}
              className="absolute -top-2 -right-1 text-4xl p-1 hover:bg-zinc-300 border rounded-full transition-all cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>{textDesciption}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <Button
            onClick={() => handleCloseModal(true)}
            variant="ghost"
            className="border text-sm px-4 rounded-full"
          >
            {textPrimaryButton}
          </Button>
          {!isLoading ? (
            <Button
              onClick={() => {
                functionOnClickSecondaryButton &&
                  functionOnClickSecondaryButton();
                handleCloseModal(false);
              }}
              className="text-sm px-4"
            >
              {textSecondaryButton}
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
