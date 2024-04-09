import { Button } from "@/components/ui/button";
import { ExamsByGuideMock } from "@/mocks/ExamsByGuideMock";
import { CardGuidePreview } from "@/pages/GuidePreview/CardGuidePreview";
import { PriceFormatter } from "@/utils/PriceFormatter";

export const GuidePreviewComponent = () => {
  const TotalCurrence = ExamsByGuideMock.reduce((totalCurrent, current) => {
    return totalCurrent + current.price;
  }, 0);

  return (
    <div className="flex flex-col items-center text-center pt-16 gap-5 w-full mx-auto">
      <p className="text-4xl font-semibold">
        Pré visualização <br /> da Guia
      </p>
      <p className="text-2xl text-left w-full font-semibold">
        Informações Presentes na Guia
      </p>
      <div className="w-full grid md:grid-cols-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2 gap-y-10">
        <CardGuidePreview title="Informações do Animal">
          <p>Nome do Animal</p>
          <p>Espécie do Animal</p>
          <p>Idade do Animal</p>
          <p>Tutor do Animal</p>
        </CardGuidePreview>
        <CardGuidePreview title="Exames Selecionados">
          {ExamsByGuideMock.map((exam, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <p>{exam.name}</p>
              <p className="font-semibold">
                {PriceFormatter.format(exam.price)}
              </p>
            </div>
          ))}

          <div className="flex items-center justify-between text-sm">
            <p className="font-bold">Preço Total</p>

            <p className="font-semibold">
              {PriceFormatter.format(TotalCurrence)}
            </p>
          </div>
        </CardGuidePreview>
        <CardGuidePreview title="Corpo da Guia">
          <p>
            Preparo <span className="font-bold">( Grupo )</span>
          </p>
        </CardGuidePreview>
        <div className="h-full relative xl:w-full">
          <p className="absolute -bottom-2 font-bold text-lg lg:relative xl:w-full xl:absolute xl:text-left">
            Adicionar Observações na Guia
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
      <Button className="md:w-1/4 ml-auto w-1/2">Concluir Guia</Button>
    </div>
  );
};
