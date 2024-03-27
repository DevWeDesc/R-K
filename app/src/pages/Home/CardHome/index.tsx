import { ICardHome } from "@/@interfaces/ICardHome";
import { ModalGeneric } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { useNavigate } from "react-router-dom";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitEmailClient>();

  const handleSubmitEmailClient = handleSubmit((value) => {
    // console.log(value);
    setTimeout(() => {
      setIsLoadingButton(false);
    }, 4000);
    setIsLoadingButton(true);
  });

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
          textTitle="Insira o E-mail do cliente para a verificação"
          variantButton={VariantsButtonEnum.default}
          textButtonActive={TextButton}
          textCancelButton="Cancelar"
          textConfirmButton="Confirmar E-mail do Cliente"
          textDesciption="Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!"
          functionOnClickButtonConfirm={handleSubmitEmailClient}
          error={errors.email ? true : false}
          isLoading={isLoadingButton}
        >
          <form onSubmit={handleSubmitEmailClient}>
            <Input
              className="w-full"
              {...register("email", { required: true })}
              placeholder="Client@example.com"
            />
            {errors.email && <InputRequiredError inputName="E-mail" />}
          </form>
        </ModalGeneric>
      )}
    </div>
  );
};
