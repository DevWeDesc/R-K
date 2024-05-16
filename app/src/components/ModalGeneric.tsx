import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IoIosClose } from "react-icons/io";
import { IModalGeneric } from "@/@interfaces/IModalGeneric";

export function ModalGeneric({
  variantButton,
  textButtonActive,
  textTitle,
  textDescription,
  className,
  children,
  openModal,
  setModalOpen,
}: IModalGeneric) {
  return (
    <AlertDialog
      open={openModal}
      onOpenChange={() => setModalOpen && setModalOpen(true)}
    >
      {variantButton && (
        <AlertDialogTrigger asChild>
          <Button
            className={`text-white font-semibold ${className}`}
            variant={variantButton}
          >
            {textButtonActive}
          </Button>
        </AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="relative">
            {textTitle}
            <IoIosClose
              onClick={() => setModalOpen && setModalOpen(false)}
              className="absolute -top-2 -right-1 text-4xl p-1 hover:bg-zinc-300 border rounded-full transition-all cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>{textDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}
