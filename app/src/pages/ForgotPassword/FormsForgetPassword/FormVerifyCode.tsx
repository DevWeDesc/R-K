import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TfiKey } from "react-icons/tfi";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPasswordProps } from "@/@interfaces/ForgotPasword/FormForgetPassword";
import Cookies from "js-cookie";

export const FormVerifyCode = ({
  cardExible,
  setCardExible,
}: IFormForgetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();
  const handleVerifyCode = handleSubmit((data) => {
    const handleSubmitVerifyCode = {
      code: data.code,
    };
    Cookies.set("forgotPasswordPage", "EditPassword");
    toast.success(`Verificação executada com sucesso!`);
    setCardExible({ ...cardExible, VerifyCode: false, EditPassword: true });
  });
  return (
    <CardForgotPassword
      icon={<TfiKey size={81} />}
      title="Código de Verificação enviado"
      description="Enviamos o Código de verificação para o seu E-mail, insira o código neste campo abaixo para confirmarmos sua identidade"
      textButton="Enviar Código"
    >
      <form
        onSubmit={handleVerifyCode}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            {...register("code", { required: true })}
            placeholder="Código de Verificação"
          />
          {errors.code && <InputRequiredError inputName="E-mail" />}
        </div>
        <Button type="submit" className="w-full">
          Verificar Código
        </Button>
      </form>
    </CardForgotPassword>
  );
};
