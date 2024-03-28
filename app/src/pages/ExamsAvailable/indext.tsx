import { GenericTable } from "@/components/GenericTable";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import { ExamsVailableMock } from "@/mocks/ExamsAvailableMock";
import Cookies from "js-cookie";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const ExamsAvailable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header navIsVisible />
      <div className="flex flex-col items-center text-center pt-16 gap-5 max-w-5xl m-auto">
        <p className="text-5xl font-semibold">
          Listagem de <br />
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
          {Cookies.get("userRole") === "admin" && (
            <Button
              onClick={() => navigate("/exams/admin")}
              variant="outline"
              className="px-8 text-sm rounded-full absolute top-0 right-0"
            >
              <RiAdminLine className="mr-1 text-lg" />
              Administrar Exames
            </Button>
          )}
          <div className="overflow-auto max-h-[45vh]">
            <GenericTable
              data={ExamsVailableMock}
              additionalFields={additionalFieldsTableGenericEnum.list}
            />
          </div>
        </div>
      </div>
    </>
  );
};
