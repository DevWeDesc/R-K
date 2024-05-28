import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPasswordProps } from "@/@interfaces/ForgotPasword/FormForgetPassword";
import { useNavigate } from "react-router-dom";
import { PiShieldCheck } from "react-icons/pi";
import Cookies from "js-cookie";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { IInputPasswordIsVisible } from "@/@interfaces/IInputPasswordIsVisible";
import { EditPasswordService } from "@/services/User/ForgotPassword/EditPasswordService";

export const FormEditPassword = ({
  cardExible,
  setCardExible,
}: IFormForgetPasswordProps) => {
  const navigate = useNavigate();

  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState({
    password: false,
    confirmPassword: false,
  } as IInputPasswordIsVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const handleEditPassword = handleSubmit(async (data) => {
    const { confirmPassword, password } = data;

    if (!password || !confirmPassword)
      return toast.error("É obrigatório preencher todos os campos!");

    if (password != confirmPassword)
      return toast.error(`As senhas não coincidem!`);

    const handleSubmitPassword = {
      password,
    };

    await EditPasswordService(handleSubmitPassword)
      .then(() => {
        toast.success(`Sua senha foi alterada com sucesso!`);
        navigate("/");
        Cookies.set("forgotPasswordPage", "sendCodeByEmail");
        setCardExible({
          ...cardExible,
          EditPassword: false,
          sendCodeByEmail: true,
        });
      })
      .catch(() => toast.error("Erro ao editar a senha!"));
  });

  const handleVisibilityPassword = () => {
    setInputPasswordIsVisible({
      ...InputPasswordIsVisible,
      password: InputPasswordIsVisible.password ? false : true,
    });
  };

  const handleVisibilityConfirmPassword = () => {
    setInputPasswordIsVisible({
      ...InputPasswordIsVisible,
      confirmPassword: InputPasswordIsVisible.confirmPassword ? false : true,
    });
  };

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
          <div>
            <div className="relative">
              <Input
                type={
                  !InputPasswordIsVisible.confirmPassword ? "password" : "text"
                }
                {...register("password", { required: true })}
                placeholder="Senha"
              />
              {InputPasswordIsVisible.confirmPassword ? (
                <Button
                  variant="password"
                  size="icon"
                  type="button"
                  onClick={handleVisibilityConfirmPassword}
                >
                  <FaRegEye size="16" />
                </Button>
              ) : (
                <Button
                  variant="password"
                  size="icon"
                  type="button"
                  onClick={handleVisibilityConfirmPassword}
                >
                  <FaRegEyeSlash size="18" />
                </Button>
              )}
            </div>
            {errors.password && (
              <InputRequiredError
                className="px-4 text-center w-full"
                inputName="Senha"
              />
            )}
          </div>
          <div>
            <div className="relative">
              <Input
                type={!InputPasswordIsVisible.password ? "password" : "text"}
                {...register("confirmPassword", { required: true })}
                placeholder="Confirmar Senha"
              />
              {InputPasswordIsVisible.password ? (
                <Button
                  variant="password"
                  size="icon"
                  type="button"
                  onClick={handleVisibilityPassword}
                >
                  <FaRegEye size="16" />
                </Button>
              ) : (
                <Button
                  variant="password"
                  size="icon"
                  type="button"
                  onClick={handleVisibilityPassword}
                >
                  <FaRegEyeSlash size="18" />
                </Button>
              )}
            </div>
            {errors.confirmPassword && (
              <InputRequiredError
                className="px-4 text-center"
                inputName="Confirmar Senha"
              />
            )}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Editar Senha
        </Button>
      </form>
    </CardForgotPassword>
  );
};
