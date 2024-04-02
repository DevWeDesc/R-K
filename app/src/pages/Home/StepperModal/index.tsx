import { ModalGeneric } from "@/components/ModalGeneric";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { useState } from "react";
import { VerifyEmailForm } from "./VerifyEmailForm";
import { AddNewClientForm } from "./AddNewClientForm";

export const StepperModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const [typeForm, setTypeForm] = useState({
    verifyEmail: true,
    addNewClient: false,
    selectedPet: false,
    addNewPet: false,
  });

  const handleMutateTypeFormForAddNewClient = () => {
    setTypeForm({ ...typeForm, addNewClient: true, verifyEmail: false });
  };

  const handleMutateTypeFormForVerifyEmail = () => {
    setTypeForm({ ...typeForm, verifyEmail: true, addNewClient: false });
  };

  return (
    <ModalGeneric
      openModal={openModal}
      setModalOpen={(ev) => setOpenModal(ev)}
      className="w-full"
      textTitle={
        typeForm.verifyEmail
          ? "Insira o E-mail do cliente para a verificação"
          : "Criação de novo Cliente"
      }
      variantButton={VariantsButtonEnum.default}
      textButtonActive="Verificar Email"
      textDescription={
        "Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!"
      }
    >
      {typeForm.verifyEmail && (
        <VerifyEmailForm
          setModalOpen={(ev) => setOpenModal(ev)}
          setTypeForm={() => handleMutateTypeFormForAddNewClient()}
        />
      )}
      {typeForm.addNewClient && (
        <AddNewClientForm
          setModalOpen={(ev) => setOpenModal(ev)}
          setTypeForm={() => handleMutateTypeFormForVerifyEmail()}
        />
      )}
    </ModalGeneric>
  );
};
