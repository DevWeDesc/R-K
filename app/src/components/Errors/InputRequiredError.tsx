import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface IInputRequiredError {
  inputName: string;
  className?: string;
}
const errorVariant = cva("text-center text-sm text-red-800 font-medium");

export const InputRequiredError = ({
  inputName,
  className,
}: IInputRequiredError) => {
  return (
    <span className={cn(errorVariant({ className }))}>
      O campo {inputName} é obrigatório!
    </span>
  );
};
