import { ICardHome } from "@/@interfaces/ICardHome";
import { ModalGeneric } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { useNavigate } from "react-router-dom";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ClientsMock } from "@/mocks/ClientsMock";
import { toast } from "react-toastify";

interface ISubmitEmailClient {
  email: string;
}

export const CardHome = ({
  title,
  description,
  TextButton,
  LinkButton,
  OpenModal,
}: ICardHome) => {
  const navigate = useNavigate();

  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [inputIsValid, setInputIsValid] = useState(false);
  const [typeForm, setTypeForm] = useState({
    verifyEmail: true,
    addNewClient: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitEmailClient>();

  const handleGetEmailByUser = (email: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (ClientsMock.find((client) => client.Email === email)) {
          setIsLoadingButton(false);
          setInputIsValid(true);
          resolve("Usuário encontrado com sucesso!");
          navigate("/exams/available");
        } else {
          setIsLoadingButton(false);
          setInputIsValid(false);
          reject("Usuário não encontrado!");
        }
      }, 2000);
    });
  };

  const handleSubmitEmailClient = handleSubmit(async (value) => {
    setIsLoadingButton(true);
    await handleGetEmailByUser(value.email)
      .then((res) => {
        toast.success(res);
      })
      .catch((res) => {
        toast.error(res);
      });
  });

  const handleMutateTypeFormForAddNewClient = () => {
    setTypeForm({ ...typeForm, addNewClient: true });
  };

  const handleMutateTypeFormForVerifyEmail = () => {
    setTypeForm({ ...typeForm, verifyEmail: true });
  };

  return (
    <div className="max-w-96 flex flex-col items-center justify-center gap-5 p-8 shadow-md shadow-zinc-500 rounded-3xl">
      <p className="max-w-40 font-bold text-3xl text-center">{title}</p>
      <p className="text-xs font-light text-center">{description}</p>
      {!OpenModal ? (
        <Button onClick={() => navigate(`${LinkButton}`)} className="w-full">
          {TextButton}
        </Button>
      ) : (
        <ModalGeneric
          className="w-full"
          textTitle={
            typeForm.verifyEmail
              ? "Insira o E-mail do cliente para a verificação"
              : "Criação de novo Cliente"
          }
          variantButton={VariantsButtonEnum.default}
          textButtonActive={TextButton}
          textPrimaryButton={
            typeForm.verifyEmail ? "Cadastrar novo Cliente" : "Voltar"
          }
          textSecondaryButton={
            typeForm.verifyEmail
              ? "Confirmar E-mail do Cliente"
              : "Adicionar Cliente"
          }
          textDesciption={
            "Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!"
          }
          error={errors.email ? true : false}
          isLoading={isLoadingButton}
          inputIsValid={inputIsValid}
          functionOnClickPrimaryButton={handleMutateTypeFormForVerifyEmail}
          functionOnClickSecondaryButton={handleSubmitEmailClient}
        >
          {typeForm.verifyEmail && (
            <form onSubmit={handleSubmitEmailClient}>
              <Input
                className="w-full"
                {...register("email", { required: true })}
                placeholder="Client@example.com"
              />
              {errors.email && (
                <InputRequiredError typeError="required" inputName="E-mail" />
              )}
            </form>
          )}
        </ModalGeneric>
      )}
    </div>
  );
};
