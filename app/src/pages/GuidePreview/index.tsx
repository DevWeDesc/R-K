import { Header } from "@/components/Header";
import { CardGuidePreview } from "./CardGuidePreview";

export const GuidePreview = () => {
  return (
    <>
      <Header navIsVisible />
      <div className="flex flex-col items-center text-center pt-16 gap-5 max-w-5xl m-auto">
        <p className="text-5xl font-semibold">Pré visualização da Guia</p>
        <p className="text-2xl pt-16 text-left w-full font-semibold">
          Informações Presentes na Guia
        </p>
        <div className="w-full grid grid-cols-2 gap-x-10 gap-y-3">
          <CardGuidePreview title="Informações do Animal">
            <p>Nome do Animal</p>
            <p>Espécie do Animal</p>
            <p>Idade do Animal</p>
            <p>Tutor do Animal</p>
          </CardGuidePreview>
          <CardGuidePreview title="Exames Selecionados">
            <div className="flex items-center justify-between text-sm">
              <p>Tutor do Animal</p>
              <p className="font-semibold">R$ 60,00</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p>Tutor do Animal</p>
              <p className="font-semibold">R$ 60,00</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="font-bold">Preço Total</p>
              <p className="font-semibold">R$ 120,00</p>
            </div>
          </CardGuidePreview>
          <CardGuidePreview title="Corpo da Guia">
            <p>
              Preparo <span className="font-bold">( Grupo )</span>
            </p>
          </CardGuidePreview>
          <div className="h-full relative">
            <p className="absolute -bottom-2 font-bold text-lg">
              Adicionar Observações na Guia{" "}
            </p>
          </div>
          <CardGuidePreview title="Informações do Veterinário">
            <p>CRMV do Veterinário</p>
            <p>Nome do Veterinário</p>
            <p>Telefone do Veterinário</p>
            <p>E-mail do Veterinário</p>
          </CardGuidePreview>
          <CardGuidePreview title="Observações da Guia">
            <textarea
              placeholder="Observações:"
              className="p-2 w-full border border-zinc-200 rounded-lg bg-zinc-100 focus:outline-none"
              rows={5}
            />
          </CardGuidePreview>
        </div>
      </div>
    </>
  );
};
