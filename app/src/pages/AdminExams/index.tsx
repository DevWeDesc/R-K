import { GenericTable } from "@/components/GenericTable";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import { ExamsVailableMock } from "@/mocks/ExamsAvailableMock";
import { CiMedicalClipboard } from "react-icons/ci";

export const AdminExams = () => {
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
        <div className="relative w-full py-16">
          <Button
            variant="outline"
            className="px-8 text-sm rounded-full absolute top-0 right-0"
          >
            <CiMedicalClipboard className="mr-1 text-lg" /> Adicionar Exame
          </Button>
          <div className="overflow-auto max-h-[45vh]">
            <GenericTable
              data={ExamsVailableMock}
              additionalFields={additionalFieldsTableGenericEnum.admin}
            />
          </div>
        </div>
      </div>
    </>
  );
};
