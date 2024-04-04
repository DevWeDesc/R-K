import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { IFormStepperModalProps } from "../VerifyEmailForm";
import { ClientsMock } from "@/mocks/ClientsMock";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISubmitNewClient {
  name: string;
  specie: string;
  age: string;
  tutor: string;
}

export const AddNewPetForm = ({
  functionPrimaryButton,
}: IFormStepperModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
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
        }
      }, 2000);
    });
  };

  const handleSubmitNewClient = handleSubmit(async (value) => {
    const { specie, name, age, tutor } = value;
    const data = {
      specie,
      name,
      age,
      tutor,
    };
    console.log(data);
    setIsLoading(true);
    await handleGetEmailByUser(value.name)
      .then((res) => {
        toast.success(res);
        navigate("/exams/available");
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
        placeholder="Nome do Pet"
      />
      {errors.name && <InputRequiredError className="pl-4" inputName="Nome" />}
      <Controller
        name="specie"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full bg-zinc-200 py-6 rounded-full">
                <SelectValue
                  placeholder="Selecione a Espécie do Pet"
                  {...field}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Canina">Canina</SelectItem>
                  <SelectItem value="Felino">Felino</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.specie && (
              <InputRequiredError className="px-4" inputName="Espécie" />
            )}
          </>
        )}
      />

      <Input
        className="w-full"
        {...register("age", { required: true })}
        placeholder="Idade do Pet"
      />
      {errors.specie && (
        <InputRequiredError className="pl-4" inputName="Idade do Pet" />
      )}
      <Input
        className="w-full"
        {...register("tutor", { required: true })}
        placeholder="Tutor"
      />
      {errors.tutor && (
        <InputRequiredError className="pl-4" inputName="Tutor" />
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
            Adicionar Pet
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
