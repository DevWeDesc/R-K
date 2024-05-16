import { Input } from "./ui/input";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { HTMLInputTypeAttribute, useState } from "react";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: any;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  isPassword?: boolean;
  id?: string;
};

export const FormField = ({
  register,
  name,
  placeholder,
  error,
  type,
  valueAsNumber,
  isPassword,
  id,
}: FormFieldProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handlePasswordVisible = () => {
    setPasswordIsVisible(true);
  };

  const handlePasswordNotVisible = () => {
    setPasswordIsVisible(false);
  };

  const typeInput: () => HTMLInputTypeAttribute = () => {
    if (passwordIsVisible) return "text";
    return "password";
  };

  return (
    <div className="w-full">
      {isPassword ? (
        <div className="relative">
          <Input
            id={id}
            placeholder={placeholder}
            type={typeInput()}
            {...register(name, { valueAsNumber })}
          />
          {passwordIsVisible ? (
            <LuEye
              onClick={handlePasswordNotVisible}
              className="text-3xl hover:bg-black/10 rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 p-[6px]"
            />
          ) : (
            <LuEyeOff
              onClick={handlePasswordVisible}
              className="text-3xl hover:bg-black/10 rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 p-[6px]"
            />
          )}
        </div>
      ) : (
        <Input
          id={id}
          placeholder={placeholder}
          type={type}
          {...register(name, { valueAsNumber })}
        />
      )}
      {error && (
        <span className="text-xs ml-4 text-red-600">{error.message}</span>
      )}
    </div>
  );
};
