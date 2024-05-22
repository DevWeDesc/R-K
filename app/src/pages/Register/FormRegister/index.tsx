import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IRegisterForm } from "@/@interfaces/IRegisterForm";
import { IInputPasswordIsVisible } from "@/@interfaces/IInputPasswordIsVisible";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { CreateUser } from "@/services/User/CreateUser";
import { IRegisterAccountDTO } from "@/@interfaces/DTOs/User/RegisterAccountDTO";
import { userRoleEnum } from "@/enums/UserRoleEnum";
import { ImSpinner8 } from "react-icons/im";
import { StatesMock } from "@/mocks/StatesMock";

export const FormRegister = () => {
  const navigate = useNavigate();
  const [InputPasswordIsVisible, setInputPasswordIsVisible] = useState({
    password: false,
    confirmPassword: false,
  } as IInputPasswordIsVisible);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: zodResolver(RegisterSchema) });

  const handleCreateNewUser = handleSubmit(async (data) => {
    let { confirmationPassword, password, crmv, email, name, phone, state } =
      data;

    const acronymState = state.substring(0, 2);
    const stateCustomer = state.substring(5, state.length);

    crmv = `${acronymState}-${crmv}`;

    if (password != confirmationPassword)
      return toast.error("As senhas não coincidem!");

    const DataRequest: IRegisterAccountDTO = {
      LoginRequestDTO: {
        password,
        roleUser: userRoleEnum.veterinarian,
      },
      VeterinarianRequestDTO: {
        crmv,
        email,
        name,
        phone,
        state: stateCustomer,
      },
    };
    setButtonIsLoading(true);
    await CreateUser(DataRequest)
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/");
        setButtonIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setButtonIsLoading(false);
      });
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
    <form onSubmit={handleCreateNewUser} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input {...register("name")} placeholder="Nome" />
            {errors.name && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="number"
              maxLength={5}
              {...register("crmv")}
              placeholder="Númeração do CRMV"
            />
            {errors.crmv && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.crmv.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input {...register("email")} placeholder="E-mail" />
            {errors.email && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Input {...register("phone")} placeholder="Telefone" />
            {errors.phone && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <Controller
          name="state"
          control={control}
          defaultValue="SP - São Paulo"
          render={({ field }) => (
            <>
              <Select
                onValueChange={field.onChange}
                defaultValue="SP - São Paulo"
              >
                <SelectTrigger className="w-full bg-zinc-200 py-6 rounded-full">
                  <SelectValue
                    defaultValue="SP - São Paulo"
                    placeholder="São Paulo"
                    {...field}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {StatesMock.map((state) => (
                      <SelectItem
                        key={state.acronym}
                        value={`${state.acronym} - ${state.state}`}
                      >
                        {state.state}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.state && (
                <InputRequiredError className="px-4" inputName="Estado" />
              )}
            </>
          )}
        />

        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="relative">
              <Input
                type={!InputPasswordIsVisible.password ? "password" : "text"}
                {...register("password")}
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
            {errors.password && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <div className="relative">
              <Input
                type={
                  !InputPasswordIsVisible.confirmPassword ? "password" : "text"
                }
                {...register("confirmationPassword")}
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
            {errors.confirmationPassword && (
              <p className="text-xs pl-2 text-red-700 font-medium">
                {errors.confirmationPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>
      {buttonIsLoading ? (
        <Button type="button" variant="outline">
          <ImSpinner8 className="animate-spin mr-2" /> Carregando
        </Button>
      ) : (
        <Button type="submit">Cadastrar</Button>
      )}
    </form>
  );
};
