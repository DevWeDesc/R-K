import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { IFormStepperModalProps } from "../VerifyEmailForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LuLoader2 } from "react-icons/lu";
import { CreateCustomer } from "@/services/Customers/CreateCustomer";
import { AxiosResponse } from "axios";
import { ICustomer } from "@/@interfaces/ICustomer";
import Cookies from "js-cookie";

interface ISubmitNewClient {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

export const AddNewClientForm = ({
  functionPrimaryButton,
  functionSecondaryButton,
}: IFormStepperModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitNewClient>();

  const handleSubmitNewClient = handleSubmit(async (value) => {
    const { email, name, phone, cpf } = value;
    const dataRequest = {
      email,
      name,
      phone,
      cpf,
    };
    setIsLoading(true);
    await CreateCustomer(dataRequest)
      .then((res: AxiosResponse<ICustomer>) => {
        Cookies.set("customerCreated", `${res.data.id}`, { expires: 60000 });
        toast.success("Cliente criado com sucesso!");
        setIsLoading(false);
        functionSecondaryButton && functionSecondaryButton();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  });
  return (
    <form onSubmit={handleSubmitNewClient} className="space-y-2">
      <Input
        className="w-full"
        {...register("name", { required: true })}
        placeholder="Nome"
      />
      {errors.name && <InputRequiredError className="pl-4" inputName="Nome" />}
      <Input
        className="w-full"
        {...register("email", { required: true })}
        placeholder="client@example.com"
      />
      {errors.email && (
        <InputRequiredError className="pl-4" inputName="E-mail" />
      )}
      <Input
        className="w-full"
        {...register("phone", { required: true })}
        placeholder="(11) 99999-9999"
      />
      {errors.phone && (
        <InputRequiredError className="pl-4" inputName="Telefone" />
      )}
      <Input
        className="w-full"
        {...register("cpf", { required: true })}
        placeholder="999.999.999-99"
      />
      {errors.cpf && <InputRequiredError className="pl-4" inputName="CPF" />}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="text-sm rounded-full"
          onClick={() => functionPrimaryButton()}
        >
          Voltar
        </Button>
        {!isLoading ? (
          <Button type="submit" className="text-sm px-4">
            Adicionar Cliente
          </Button>
        ) : (
          <Button disabled className="text-sm font-normal px-4">
            <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
            Por favor Aguarde
          </Button>
        )}
      </div>
    </form>
  );
};
