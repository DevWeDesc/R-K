import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPassword } from "@/@interfaces/ForgotPasword/FormForgetPassword";
import { useNavigate } from "react-router-dom";
import { PiShieldCheck } from "react-icons/pi";
import Cookies from "js-cookie";

export const FormEditPassword = ({
  cardExible,
  setCardExible,
}: IFormForgetPassword) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const handleEditPassword = handleSubmit((data) => {
    const handleSubmitVerifyCode = {
      password: data.password,
    };
    if (data.password != data.confirmPassword) {
      toast.error(`As senhas não coincidem!`);
    } else {
      toast.success(`Sua senha foi alterada com sucesso!`);
      navigate("/");
      Cookies.set("forgotPasswordPage", "sendCodeByEmail");
      setCardExible({
        ...cardExible,
        EditPassword: false,
        sendCodeByEmail: true,
      });
    }
  });

  return (
    <CardForgotPassword
      icon={<PiShieldCheck className="font-normal" size={81} />}
      title="Verificação executada com sucesso!"
      description="Enviamos o Código de verificação para o seu E-mail, insira o código neste campo abaixo para confirmarmos sua identidade"
      textButton="Enviar Código"
    >
      <form
        onSubmit={handleEditPassword}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            {...register("password", { required: true })}
            placeholder="Senha"
          />
          {errors.password && <InputRequiredError inputName="Senha" />}
          <Input
            className="w-full"
            {...register("confirmPassword", { required: true })}
            placeholder="Corfirmar Senha"
          />
          {errors.confirmPassword && (
            <InputRequiredError inputName="Confirmar Senha" />
          )}
        </div>
        <Button type="submit" className="w-full">
          Editar Senha
        </Button>
      </form>
    </CardForgotPassword>
  );
};
