import { ISubmitEmailRequestDTO } from "@/@interfaces/DTOs/ISubmitEmailRequestDTO";
import { ICustomer } from "@/@interfaces/ICustomer";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetCustomers } from "@/services/Customers/GetCustomers";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "react-toastify";

export interface IFormStepperModalProps {
  setModalOpen: (ev: boolean) => void;
  functionPrimaryButton: () => void;
  functionSecondaryButton?: () => void;
  setCustomerSelected?: (ev: ICustomer) => void;
  customersPets?: ICustomer;
}

export const VerifyEmailForm = ({
  functionPrimaryButton,
  // setCustomerSelected,
  functionSecondaryButton,
}: IFormStepperModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitEmailRequestDTO>();

  const handleSubmitEmailClient = handleSubmit(async (value) => {
    setIsLoading(true);
    const queryGetCustomer = {
      email: value.email,
    };
    await GetCustomers(queryGetCustomer)
      .then((res: AxiosResponse<ICustomer>) => {
        Cookies.set("customerCreated", `${res.data.id}`);
        // setCustomerSelected && setCustomerSelected(res.data);
        toast.success("Cliente encontrado com sucesso!");
        setIsLoading(false);
        functionSecondaryButton && functionSecondaryButton();
      })
      .catch((res) => {
        setIsLoading(false);
        toast.error(res.response.data.message);
      });
  });

  return (
    <div>
      <form onSubmit={handleSubmitEmailClient}>
        <Input
          className="w-full"
          {...register("email", { required: true })}
          placeholder="client@example.com"
        />
        {errors.email && <InputRequiredError inputName="E-mail" />}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <Button
            variant="outline"
            className="text-sm rounded-full"
            onClick={() => functionPrimaryButton()}
          >
            Cadastrar Cliente
          </Button>
          {!isLoading ? (
            <Button type="submit" className="text-sm px-4">
              Confirmar E-mail do Cliente
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
