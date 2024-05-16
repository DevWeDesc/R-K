import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
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
import { ISolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/SolicitationRequestDTO";
import { CreateSolicitation } from "@/services/Solicitations/CreateSolicitation";
import { useQuery } from "react-query";
import { GetCustomerById } from "@/services/Customers/GetCustomerById";
import Cookies from "js-cookie";

interface ISubmitPetSelectedRequestDTO {
  petId: string;
}

export const SelectPetForm = ({
  functionPrimaryButton,
}: IFormStepperModalProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const vetLoged = JSON.parse(localStorage.user);
  const customerId = Cookies.get("customerCreated");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitPetSelectedRequestDTO>();

  const { data } = useQuery({
    queryFn: () => GetCustomerById(customerId ? customerId : ""),
  });

  const handleSubmitEmailClient = handleSubmit(async (value) => {
    const { petId } = value;
    setIsLoading(true);
    const veterinariansId = vetLoged.user.id;
    const dataRequest: ISolicitationRequestDTO = {
      petsId: parseInt(petId),
      veterinariansId,
    };
    await CreateSolicitation(dataRequest)
      .then((res) => {
        toast.success("Solicitação aberta com sucesso!");
        setIsLoading(false);
        navigate(`/exams/available/${res.data.id}`);
      })
      .catch((res) => {
        toast.error(res.response.message);
        setIsLoading(false);
      });
  });

  return (
    <div>
      <form onSubmit={handleSubmitEmailClient}>
        <Controller
          name="petId"
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
                    {data?.data?.pets?.map((pet) => (
                      <SelectItem key={pet.id} value={pet.id.toString()}>
                        {pet.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.petId && (
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
