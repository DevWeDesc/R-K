import { GenericTable } from "@/components/GenericTable";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import Cookies from "js-cookie";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GuidePreviewComponent } from "./GuidePreview";
import { ExamsByGuideMock } from "@/mocks/ExamsByGuideMock";
import { useRef, useState } from "react";

export const ExamsAvailable = () => {
  const navigate = useNavigate();
  const headerTable = ["Nome do Exame", "Preço do Exame"];
  const [isLoading, setIsLoading] = useState(false);
  const guideRef = useRef<HTMLDivElement>(null);

  const scrollToGuidePreview = () =>
    guideRef.current && guideRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Header navIsVisible />
      <div
        className={`grid ${
          ExamsByGuideMock.length > 0 && "lg:grid-cols-2"
        } lg:gap-10 px-5`}
      >
        <div className="flex flex-col items-center text-center pt-16 gap-5 w-full mx-auto">
          <p className="text-4xl font-semibold">
            Listagem de <br />
            Exames Disponíveis
          </p>
          <p className="text-sm font-light">
            Bem-vindo à nossa abrangente lista de exames veterinários
            disponíveis, projetada para atender às necessidades de saúde dos
            seus preciosos animais de estimação. Aqui, você encontrará uma
            variedade de exames cuidadosamente selecionados para garantir que
            seus companheiros peludos recebam o mais alto nível de cuidado
            veterinário. Desde exames de rotina até procedimentos
            especializados, nossa equipe dedicada está aqui para oferecer
            suporte e garantir que seus animais desfrutem de uma vida saudável e
            feliz.
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
            <div className="overflow-auto max-h-full">
              <GenericTable
                headerTable={headerTable}
                additionalFields={additionalFieldsTableGenericEnum.list}
                setIsLoading={setIsLoading}
                scrollForGuide={scrollToGuidePreview}
              />
            </div>
          </div>
        </div>
        <GuidePreviewComponent ref={guideRef} isloading={isLoading} />
      </div>
    </>
  );
};
