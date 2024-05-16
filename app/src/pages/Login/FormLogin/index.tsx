import { ILoginUser } from "@/@interfaces/ILoginForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { LoginService } from "@/services/User/LoginService";
import { ImSpinner8 } from "react-icons/im";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  const loginSucces = (res: any) => {
    localStorage.user = JSON.stringify(res.data.tokenInformations);
    toast.success("Login efetuado com sucesso!");
    Cookies.set("userRole", `${res.data.tokenInformations.user.roleUser}`, {
      expires: 7,
    });
    navigate("/home");
  };

  const onSubmit = handleSubmit(async (data) => {
    const handleSubmitUser = {
      crmv: data.crmv,
      email: data.email,
      password: data.password,
    };

    await LoginService(handleSubmitUser)
      .then((res) => loginSucces(res))
      .catch(() => {
        toast.error("Erro ao realizar login! Verifique os dados fornecidos!");
        setButtonIsLoading(false);
      });
  });

  const handleVisibilityPassword = () => {
    setInputPasswordIsVisible((prev) => (prev ? false : true));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <div>
          <Input
            {...register("crmv", { required: true })}
            placeholder="Sigla do estado + Nº CRMV (SP-123)"
          />
          {errors.crmv && (
            <InputRequiredError className="px-4" inputName="CRMV" />
          )}
        </div>
        <div>
          <Input
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email && (
            <InputRequiredError className="px-4" inputName="E-mail" />
          )}
        </div>
        <div>
          <div className="relative">
            <Input
              type={!InputPasswordIsVisible ? "password" : "text"}
              {...register("password", { required: true })}
              placeholder="Senha"
            />
            {InputPasswordIsVisible ? (
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
          {errors.password && (
            <InputRequiredError className="px-4" inputName="Senha" />
          )}
        </div>
      </div>
      {buttonIsLoading ? (
        <Button type="button" variant="outline">
          <ImSpinner8 className="animate-spin mr-2" /> Carregando
        </Button>
      ) : (
        <Button type="submit">Entrar</Button>
      )}
    </form>
  );
};
