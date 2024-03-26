import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UsersMock } from "@/mocks/UsersMock";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IRegisterForm } from "@/@interfaces/IRegisterForm";
import { ILoginUser } from "@/@interfaces/ILoginForm";
import { IInputPasswordIsVisible } from "@/@interfaces/IInputPasswordIsVisible";

export const FormRegister = () => {
  const navigate = useNavigate();
  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState({
    password: false,
    confirmPassword: false,
  } as IInputPasswordIsVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const handleCreateNewUser = handleSubmit((data) => {
    const handleSubmitUser: IRegisterForm = {
      Name: data.Name,
      CRMV: data.CRMV,
      Email: data.Email,
      Phone: data.Phone,
      State: data.State,
      Password: data.Password,
      ConfirmationPassword: data.ConfirmationPassword,
    };

    const { CRMV, Email, Password, ConfirmationPassword } = handleSubmitUser;

    if (Password != ConfirmationPassword) {
      toast.error("A confirmação de senha está diferente da senha!");
    } else if (
      UsersMock.find(
        (user) =>
          user.CRMV === CRMV &&
          user.Email === Email &&
          user.Password === Password
      )
    ) {
      toast.error("Esse Usuário já existe!");
    } else {
      const newUser: ILoginUser = { CRMV, Email, Password };
      UsersMock.push(newUser);
      toast.success("Usuário adicionado com sucesso!");
      navigate("/");
    }
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
  // 1770px
  return (
    <form onSubmit={handleCreateNewUser} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              {...register("Name", { required: true })}
              placeholder="Nome"
            />
            {errors.CRMV && (
              <InputRequiredError className="px-4" inputName="Nome" />
            )}
          </div>
          <div>
            <Input
              {...register("CRMV", { required: true })}
              placeholder="CRMV do veterinário"
            />
            {errors.CRMV && (
              <InputRequiredError className="px-4" inputName="CRMV" />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
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
            <Input
              {...register("Phone", { required: true })}
              placeholder="Telefone"
            />
            {errors.Email && (
              <InputRequiredError className="px-4" inputName="Telefone" />
            )}
          </div>
        </div>
        <div>
          <Input
            {...register("State", { required: true })}
            placeholder="Estado"
          />
          {errors.Email && (
            <InputRequiredError className="px-4" inputName="Estado" />
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="relative">
              <Input
                type={!InputPasswordIsVisible.password ? "password" : "text"}
                {...register("Password", { required: true })}
                placeholder="Senha"
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
            {errors.Password && (
              <InputRequiredError className="px-4" inputName="Senha" />
            )}
          </div>
          <div>
            <div className="relative">
              <Input
                type={
                  !InputPasswordIsVisible.confirmPassword ? "password" : "text"
                }
                {...register("Password", { required: true })}
                placeholder="Confirmar Senha"
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
            {errors.Password && (
              <InputRequiredError
                className="px-4"
                inputName="Confirmar Senha"
              />
            )}
          </div>
        </div>
      </div>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
