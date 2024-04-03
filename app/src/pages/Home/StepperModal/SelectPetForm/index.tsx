import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { ClientsMock } from "@/mocks/ClientsMock";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IFormStepperModalProps } from "../VerifyEmailForm";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISubmitPetSelectedRequestDTO {
  pet: string;
}

export const SelectPetForm = ({
  functionPrimaryButton,
}: IFormStepperModalProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitPetSelectedRequestDTO>();

  const handleGetEmailByUser = (
    email: string,
    petSelected: string
  ): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (
          ClientsMock.find(
            (client) =>
              client.email === email &&
              client.pets?.find((pet) => pet === petSelected)
          )
        ) {
          setIsLoading(false);
          resolve("Pet encontrado com sucesso!");
          navigate("/exams/available");
        } else {
          setIsLoading(false);
          reject("Pet não encontrado!");
        }
      }, 2000);
    });
  };

  const handleSubmitEmailClient = handleSubmit(async (value) => {
    setIsLoading(true);
    await handleGetEmailByUser("cliente@gmail.com", value.pet)
      .then((res) => {
        toast.success(res);
      })
      .catch((res) => {
        toast.error(res);
      });
  });

  return (
    <div>
      <form onSubmit={handleSubmitEmailClient}>
        <Controller
          name="pet"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full bg-zinc-200 py-6 rounded-full">
                  <SelectValue
                    placeholder="Selecione o Pet do cliente"
                    {...field}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Mel">Mel</SelectItem>
                    <SelectItem value="Luna">Luna</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.pet && (
                <InputRequiredError className="px-4" inputName="Pet" />
              )}
            </>
          )}
        />
        <div className="grid grid-cols-2 gap-2 mt-3">
          <Button
            variant="outline"
            className="text-sm rounded-full"
            onClick={() => functionPrimaryButton()}
          >
            Cadastrar Novo Pet
          </Button>
          {!isLoading ? (
            <Button type="submit" className="text-sm px-4">
              Confirmar Pet
            </Button>
          ) : (
            <Button disabled className="text-sm font-normal px-4">
              <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
              Por favor Aguarde
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
