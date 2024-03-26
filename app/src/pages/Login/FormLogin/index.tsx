import { ILoginUser } from "@/@interfaces/ILoginForm";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UsersMock } from "@/mocks/UsersMock";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  const onSubmit = handleSubmit((data) => {
    const handleSubmitUser = {
      CRMV: data.CRMV,
      Email: data.Email,
      Password: data.Password,
    };

    const { CRMV, Email, Password } = handleSubmitUser;
    const userIsValid = UsersMock.find(
      (user) =>
        user.CRMV === CRMV && user.Email === Email && user.Password === Password
    );
    if (userIsValid) {
      toast.success("Usuário logado com sucesso!");
      Cookies.set("userRole", `${userIsValid.userRole}`, { expires: 7 });
      navigate("/home");
    } else {
      toast.error("Os dados informados são inválidos!");
    }
  });

  const handleVisibilityPassword = () => {
    setInputPasswordIsVisible((prev) => (prev ? false : true));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <div>
          <Input
            {...register("CRMV", { required: true })}
            placeholder="CRMV do veterinário"
          />
          {errors.CRMV && (
            <InputRequiredError className="px-4" inputName="CRMV" />
          )}
        </div>
        <div>
          <Input
            {...register("Email", { required: true })}
            placeholder="E-mail"
          />
          {errors.Email && (
            <InputRequiredError className="px-4" inputName="E-mail" />
          )}
        </div>
        <div>
          <div className="relative">
            <Input
              type={!InputPasswordIsVisible ? "password" : "text"}
              {...register("Password", { required: true })}
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
          {errors.Password && (
            <InputRequiredError className="px-4" inputName="Senha" />
          )}
        </div>
      </div>
      <Button type="submit">Entrar</Button>
    </form>
  );
};
