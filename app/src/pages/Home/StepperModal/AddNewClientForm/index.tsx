import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { IFormStepperModalProps } from "../VerifyEmailForm";
import { ClientsMock } from "@/mocks/ClientsMock";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LuLoader2 } from "react-icons/lu";

interface ISubmitNewClient {
  name: string;
  email: string;
  phone: string;
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

  const handleGetEmailByUser = (email: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (ClientsMock.find((client) => client.email === email)) {
          setIsLoading(false);
          reject("Este usuário Já existe no sistema!");
        } else {
          setIsLoading(false);
          resolve("Usuário cadastrado com sucesso!");
          functionSecondaryButton && functionSecondaryButton();
        }
      }, 2000);
    });
  };

  const handleSubmitNewClient = handleSubmit(async (value) => {
    const { email, name, phone } = value;
    const data = {
      email,
      name,
      phone,
    };
    setIsLoading(true);
    await handleGetEmailByUser(value.email)
      .then((res) => {
        ClientsMock.push(data);
        toast.success(res);
      })
      .catch((res) => {
        toast.error(res);
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
