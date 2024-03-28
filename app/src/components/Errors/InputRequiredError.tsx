import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface IInputRequiredError {
  inputName: string;
  className?: string;
  typeError: string;
}
const errorVariant = cva("text-center text-sm text-red-800 font-medium");

export const InputRequiredError = ({
  inputName,
  className,
  typeError,
}: IInputRequiredError) => {
  return (
    <span className={cn(errorVariant({ className }))}>
      {typeError === "required" && `O campo ${inputName} é obrigatório!`}
      {typeError === "isNotValid" && `O campo ${inputName} é inválido!`}
    </span>
  );
};
