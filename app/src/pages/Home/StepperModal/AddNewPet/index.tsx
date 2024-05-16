import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { IFormStepperModalProps } from "../VerifyEmailForm";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LuLoader2 } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { GetCustomerById } from "@/services/Customers/GetCustomerById";
import { ICreatePetRequestDTO } from "@/@interfaces/DTOs/Pet/CreatePetRequestDTO";
import { CreatePet } from "@/services/Pets/CreatePet";

type sexType = "Macho" | "Femea";

interface ISubmitNewClient {
  name: string;
  specie: string;
  age: string;
  tutor: string;
  sex: sexType;
}

export const AddNewPetForm = ({
  functionPrimaryButton,
}: IFormStepperModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const customerId = Cookies.get("customerCreated");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISubmitNewClient>();

  const { data } = useQuery({
    queryFn: () => GetCustomerById(customerId ? customerId : ""),
  });

  const handleSubmitNewClient = handleSubmit(async (value) => {
    const { specie, name, age, sex } = value;
    if (customerId) {
      const dataRequest: ICreatePetRequestDTO = {
        name,
        specie,
        age,
        sex,
        customerId: parseInt(customerId),
      };
      console.log(dataRequest);
      await CreatePet(dataRequest)
        .then(() => {
          toast.success("Pet Criado com sucesso!");
          functionPrimaryButton();
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro ao cadastrar Pet!");
          setIsLoading(false);
        });
    }
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
                  <SelectItem value="Canino">Canina</SelectItem>
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
      <Controller
        name="sex"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full bg-zinc-200 py-6 rounded-full">
                <SelectValue placeholder="Selecione o Sexo do Pet" {...field} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Macho">Macho</SelectItem>
                  <SelectItem value="Femea">Fêmea</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.sex && (
              <InputRequiredError className="px-4" inputName="Sexo" />
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
        value={data?.data?.name}
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
