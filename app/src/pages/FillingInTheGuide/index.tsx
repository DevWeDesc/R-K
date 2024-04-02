import { Header } from "@/components/Header";
import { FormFillTheGuide } from "./FormFillTheGuide";

export const FillingInTheGuide = () => {
  return (
    <>
      <Header navIsVisible />
      <div className="max-w-5xl m-auto py-16 flex flex-col gap-16">
        <div className="space-y-6">
          <p className="text-center font-semibold text-4xl">
            Preenchimento da Guia de Solicitação <br />
            Para o Exame Hemograma Canino Filhote
          </p>
          <p className="font-light text-sm text-center">
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
        </div>
        <FormFillTheGuide />
      </div>
    </>
  );
};
