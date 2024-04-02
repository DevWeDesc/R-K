import { ISubmitEmailRequestDTO } from "@/@interfaces/DTOs/ISubmitEmailRequestDTO";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClientsMock } from "@/mocks/ClientsMock";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface IFormStepperModalProps {
  setModalOpen: (ev: boolean) => void;
  setTypeForm: () => void;
}

export const VerifyEmailForm = ({ setTypeForm }: IFormStepperModalProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitEmailRequestDTO>();

  const handleGetEmailByUser = (email: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (ClientsMock.find((client) => client.email === email)) {
          setIsLoading(false);
          resolve("Usuário encontrado com sucesso!");
          navigate("/exams/available");
        } else {
          setIsLoading(false);
          reject("Usuário não encontrado!");
        }
      }, 2000);
    });
  };

  const handleSubmitEmailClient = handleSubmit(async (value) => {
    setIsLoading(true);
    await handleGetEmailByUser(value.email)
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
            onClick={() => setTypeForm()}
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
