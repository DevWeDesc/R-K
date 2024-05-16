import { GenericTable } from "@/components/GenericTable";
import { Header } from "@/components/Header";
import { ModalGeneric } from "@/components/ModalGeneric";
import { Button } from "@/components/ui/button";
import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import { ExamsVailableMock } from "@/mocks/ExamsAvailableMock";
import { useState } from "react";
import { CiMedicalClipboard } from "react-icons/ci";
import { FormOfAddNewExam } from "./FormOfAddNewExam";

// interface IModalAdmin {
//   textTitle: string;
//   textDescription: string;
// }
export const AdminExams = () => {
  // const [modalInformations, setModalInformations] = useState({} as IModalAdmin);
  const [openModal, setOpenModal] = useState(false);

  const handleMutateModalOpened = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Header navIsVisible />
      <div className="flex flex-col items-center text-center pt-16 gap-5 max-w-5xl m-auto">
        <p className="text-4xl font-semibold">
          Administração de <br />
          Exames Disponíveis
        </p>
        <p className=" text-sm font-light">
          Bem-vindo à nossa abrangente lista de exames veterinários disponíveis,
          projetada para atender às necessidades de saúde dos seus preciosos
          animais de estimação. Aqui, você encontrará uma variedade de exames
          cuidadosamente selecionados para garantir que seus companheiros
          peludos recebam o mais alto nível de cuidado veterinário. Desde exames
          de rotina até procedimentos especializados, nossa equipe dedicada está
          aqui para oferecer suporte e garantir que seus animais desfrutem de
          uma vida saudável e feliz.
        </p>
        <div className="relative w-full pt-16">
          <Button
            onClick={handleMutateModalOpened}
            variant="outline"
            className="px-8 text-sm rounded-full absolute top-0 right-0"
          >
            <CiMedicalClipboard className="mr-1 text-lg" /> Adicionar Exame
          </Button>
          <GenericTable
            headerTable={ExamsVailableMock.headerTable}
            additionalFields={additionalFieldsTableGenericEnum.admin}
          />
          <ModalGeneric
            openModal={openModal}
            setModalOpen={(ev) => setOpenModal(ev)}
            className="w-full"
            textTitle="Adicione um novo exame agora!"
            textDescription="Para adicionar um novo exame, preencha todos os campos do formulário corretamente!"
          >
            <FormOfAddNewExam setModalIsOpen={setOpenModal} />
          </ModalGeneric>
        </div>
      </div>
    </>
  );
};
