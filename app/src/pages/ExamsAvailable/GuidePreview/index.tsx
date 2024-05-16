import { IExamsPerPetOnSolicitations } from "@/@interfaces/IExamsPerPetOnSolicitations";
import { ModalGeneric } from "@/components/ModalGeneric";
import { Button } from "@/components/ui/button";
import { CardGuidePreview } from "@/pages/GuidePreview/CardGuidePreview";
import { RemoveExamInPetOnSolicitation } from "@/services/ExamsInPetOnSolicitations/RemoveExamInPetOnSolicitation";
import { SolicitationById } from "@/services/Solicitations/SolicitationById";
import { PriceFormatter } from "@/utils/PriceFormatter";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FormGuide } from "./FormGuide";

type ParamsType = {
  id: string;
};

interface IGuidePreview {
  isloading: boolean;
}

export const GuidePreviewComponent = ({ isloading }: IGuidePreview) => {
  const { id } = useParams<ParamsType>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [observations, setObservations] = useState("");

  const handleRemoveExamInGuide = async (exam: IExamsPerPetOnSolicitations) => {
    await RemoveExamInPetOnSolicitation(exam.id).then(() => {
      toast.success(`Exame ${exam.Exams.name} removido com sucesso!`);
      refetch();
    });
  };

  const { data, refetch } = useQuery({
    queryKey: ["solicitation", handleRemoveExamInGuide, isloading],
    queryFn: () => SolicitationById(id ? id : ""),
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  if (id)
    return (
      <div className="flex flex-col items-center text-center pt-16 gap-5 w-full mx-auto mb-10">
        <p className="text-4xl font-semibold">
          Pré visualização <br /> da Guia
        </p>
        <p className="text-2xl text-left w-full font-semibold">
          Informações Presentes na Guia
        </p>
        <div className="w-full grid md:grid-cols-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2 gap-y-10">
          <CardGuidePreview title="Informações do Animal">
            <div className="h-full flex flex-col justify-center">
              <p>
                <strong>Nome do Pet:</strong>{" "}
                {data?.data.solicitationsDetails.pet.name}.
              </p>
              <p>
                <strong>Espécie:</strong>{" "}
                {data?.data.solicitationsDetails.pet.specie}.
              </p>
              <p>
                <strong>Idade:</strong>{" "}
                {data?.data.solicitationsDetails.pet.age}.
              </p>
              <p>
                <strong>Tutor:</strong>{" "}
                {data?.data.solicitationsDetails.pet.customer?.name}.
              </p>
            </div>
          </CardGuidePreview>
          <CardGuidePreview title="Exames Selecionados">
            {data?.data.solicitationsDetails?.exams.map(
              (exam: IExamsPerPetOnSolicitations) => (
                <div
                  key={exam.id}
                  className="flex justify-between items-center relative text-sm"
                >
                  <p>{exam.Exams.name}</p>
                  <div className="flex col-span-2 justify-end items-center gap-8">
                    <Button
                      onClick={() => handleRemoveExamInGuide(exam)}
                      size="sm"
                      variant="destructive"
                      className="px-4"
                    >
                      <FaRegTrashCan className="text-base" />
                    </Button>
                    <p className="font-semibold text-end w-[80px]">
                      {PriceFormatter.format(exam.Exams.value)}
                    </p>
                  </div>
                </div>
              )
            )}
            <div className="flex items-center justify-between text-sm">
              <p className="font-bold">Preço Total</p>
              <p className="font-semibold">{data?.data.total}</p>
            </div>
          </CardGuidePreview>
          <CardGuidePreview title="Corpo da Guia">
            <div className="space-y-4">
              {data?.data.solicitationsDetails?.exams.map(
                (exams: IExamsPerPetOnSolicitations) => (
                  <div key={exams.id}>
                    <p>- {exams.Exams.name}</p>
                    <p>
                      <strong>Preparo: </strong>
                      {exams.Exams.preparing}
                    </p>
                  </div>
                )
              )}
            </div>
          </CardGuidePreview>
          <div className="h-full relative xl:w-full">
            <p className="absolute -bottom-2 font-bold text-lg lg:relative xl:w-full xl:absolute xl:text-left">
              Adicionar Observações na Guia
            </p>
          </div>
          <CardGuidePreview title="Informações do Veterinário">
            <p>
              <strong>CRMV do Veterinário: </strong>
              {data?.data.solicitationsDetails.veterinarians.crmv}
            </p>
            <p>
              <strong>Nome do Veterinário: </strong>
              {data?.data.solicitationsDetails.veterinarians.name}
            </p>
          </CardGuidePreview>
          <CardGuidePreview title="Observações da Guia">
            <textarea
              onChange={(ev) => setObservations(ev.target.value)}
              value={observations}
              placeholder="Observações:"
              className="p-2 w-full border border-zinc-200 rounded-lg bg-zinc-100 focus:outline-none"
              rows={5}
            />
          </CardGuidePreview>
        </div>
        <Button onClick={handleOpenModal} className="md:w-1/4 ml-auto w-1/2">
          Concluir Guia
        </Button>
        <ModalGeneric
          openModal={modalIsOpen}
          setModalOpen={handleCloseModal}
          textTitle="Finalização de Guia"
          textDescription={`Deseja confirmar a finalização da Guia do Pet ${data?.data.solicitationsDetails.pet.name}? Selecione quais E-mails receberão o PDF com a Guia gerada!`}
        >
          <FormGuide
            observation={observations}
            closeModal={handleCloseModal}
            customerInformations={data?.data.solicitationsDetails.pet.customer}
            emailVeterinarian={
              data?.data.solicitationsDetails.veterinarians.email
            }
          />
        </ModalGeneric>
      </div>
    );
};
