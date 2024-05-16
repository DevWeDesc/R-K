import { ModalGeneric } from "@/components/ModalGeneric";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { useEffect, useState } from "react";
import { VerifyEmailForm } from "./VerifyEmailForm";
import { AddNewClientForm } from "./AddNewClientForm";
import { AddNewPetForm } from "./AddNewPet";
import { IModalGeneric } from "@/@interfaces/IModalGeneric";
import { SelectPetForm } from "./SelectPetForm";
import { ICustomer } from "@/@interfaces/ICustomer";

export const StepperModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [customerSelected, setCustomerSelected] = useState({} as ICustomer);
  const [attributesByModal, setAttributesByModal] = useState(
    {} as IModalGeneric
  );

  const [typeForm, setTypeForm] = useState({
    verifyEmail: true,
    addNewClient: false,
    selectedPet: false,
    addNewPet: false,
  });

  const handleMutateTypeFormForAddNewClient = () => {
    setTypeForm({
      addNewClient: true,
      verifyEmail: false,
      addNewPet: false,
      selectedPet: false,
    });
  };

  const handleMutateTypeFormForVerifyEmail = () => {
    setTypeForm({
      verifyEmail: true,
      addNewClient: false,
      addNewPet: false,
      selectedPet: false,
    });
  };

  const handleMutateTypeFormForAddNewPet = () => {
    setTypeForm({
      addNewPet: true,
      selectedPet: false,
      addNewClient: false,
      verifyEmail: false,
    });
  };
  const handleMutateTypeFormForSelectPet = () => {
    setTypeForm({
      selectedPet: true,
      addNewPet: false,
      addNewClient: false,
      verifyEmail: false,
    });
  };

  const handleAttributesByModal = () => {
    switch (true) {
      case typeForm.verifyEmail:
        setAttributesByModal({
          textTitle: "Insira o E-mail do cliente para a verificação",
          textDescription:
            "Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!",
        });
        break;
      case typeForm.addNewClient:
        setAttributesByModal({
          textTitle: "Criação de novo Cliente",
          textDescription:
            "Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!",
        });
        break;
      case typeForm.addNewPet:
        setAttributesByModal({
          textTitle: "Criação de novo Pet",
          textDescription:
            "Insira o E-mail do cliente que deseja atender, para validarmos se ele está disponível no sistema!",
        });
        break;
      default:
        setAttributesByModal({
          textTitle: "Seleção ou Adição de Pet",
          textDescription:
            "Para prosseguir Selecione o pet que o cliente deseja, se o pet não estiver cadastrado clique em adicionar novo Pet para cadastra-lo!",
        });
        break;
    }
  };

  useEffect(() => {
    handleAttributesByModal();
  }, [typeForm]);

  return (
    <ModalGeneric
      openModal={openModal}
      setModalOpen={(ev) => setOpenModal(ev)}
      className="w-full"
      textTitle={attributesByModal.textTitle}
      variantButton={VariantsButtonEnum.default}
      textButtonActive="Solicitar Exames"
      textDescription={attributesByModal.textDescription}
    >
      {typeForm.verifyEmail && (
        <VerifyEmailForm
          setCustomerSelected={(ev: ICustomer) => setCustomerSelected(ev)}
          setModalOpen={(ev) => setOpenModal(ev)}
          functionPrimaryButton={() => handleMutateTypeFormForAddNewClient()}
          functionSecondaryButton={() => handleMutateTypeFormForSelectPet()}
        />
      )}
      {typeForm.addNewClient && (
        <AddNewClientForm
          setCustomerSelected={(ev: ICustomer) => setCustomerSelected(ev)}
          setModalOpen={(ev) => setOpenModal(ev)}
          functionPrimaryButton={() => handleMutateTypeFormForVerifyEmail()}
          functionSecondaryButton={() => handleMutateTypeFormForAddNewPet()}
        />
      )}
      {typeForm.addNewPet && (
        <AddNewPetForm
          setModalOpen={(ev) => setOpenModal(ev)}
          functionPrimaryButton={() => handleMutateTypeFormForVerifyEmail()}
        />
      )}
      {typeForm.selectedPet && (
        <SelectPetForm
          customersPets={customerSelected}
          setModalOpen={(ev) => setOpenModal(ev)}
          functionPrimaryButton={() => handleMutateTypeFormForAddNewPet()}
        />
      )}
    </ModalGeneric>
  );
};
