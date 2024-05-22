import { ILoginUser } from "@/@interfaces/ILoginForm";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { LoginService } from "@/services/User/LoginService";
import { ImSpinner8 } from "react-icons/im";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { StatesMock } from "@/mocks/StatesMock";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/LoginSchema";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: zodResolver(LoginSchema) });

  const loginSucces = (res: any) => {
    localStorage.user = JSON.stringify(res.data.tokenInformations);
    toast.success("Login efetuado com sucesso!");
    Cookies.set("userRole", `${res.data.tokenInformations.user.roleUser}`, {
      expires: 7,
    });
    setButtonIsLoading(false);
    navigate("/home");
  };

  const onSubmit = handleSubmit(async (data) => {
    let { state, crmv, email, password } = data;
    const handleSubmitUser = {
      state,
      crmv,
      email,
      password,
    };
    setButtonIsLoading(true);

    await LoginService(handleSubmitUser)
      .then((res) => loginSucces(res))
      .catch((err) => {
        console.log(err);
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
        <div className="grid grid-cols-2 gap-1">
          <Controller
            name="state"
            control={control}
            defaultValue="SP"
            render={({ field }) => (
              <>
                <Select onValueChange={field.onChange} defaultValue="SP">
                  <SelectTrigger className="w-full bg-zinc-200 py-6 rounded-full">
                    <SelectValue
                      defaultValue="SP"
                      placeholder="São Paulo"
                      {...field}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {StatesMock.map((state) => (
                        <SelectItem key={state.acronym} value={state.acronym}>
                          {state.state}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.state && <p>{errors.state.message}</p>}
              </>
            )}
          />
          <Input
            {...register("crmv")}
            type="number"
            placeholder="Numeração do CRMV"
          />
          {errors.crmv && (
            <div className="col-start-2">
              {errors.crmv && (
                <p className="text-red-700 text-xs pl-2 font-medium">
                  {errors.crmv.message}
                </p>
              )}
            </div>
          )}
        </div>
        <div>
          <Input {...register("email")} placeholder="E-mail" />
          {errors.email && (
            <p className="text-red-700 text-xs pl-2 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <div className="relative">
            <Input
              type={!InputPasswordIsVisible ? "password" : "text"}
              {...register("password")}
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
            <p className="text-red-700 text-xs pl-2 font-medium">
              {errors.password.message}
            </p>
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
