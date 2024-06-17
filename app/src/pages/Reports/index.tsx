import { Header } from "@/components/Header";
import { Graphic } from "./Graphics";
import { useQuery } from "react-query";
import {
  ParamsSolicitationsPerVet,
  SolicitationsPerVet,
} from "@/services/Solicitations/SolicitationsPerVet";
import { ImSpinner8 } from "react-icons/im";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { ExhibitionReport } from "./ExhibitionReport";
import { useState } from "react";

export const Reports = () => {
  const [params, setParams] = useState({
    initialDate: null,
    finalDate: null,
    name: null,
  } as ParamsSolicitationsPerVet);

  const handleMutateNameByParams = (name: string) => {
    setParams({ ...params, name });
  };

  const handleMutateInitialDateByParams = (initialDate: string) => {
    setParams({ ...params, initialDate });
  };

  const handleMutateFinalDateByParams = (finalDate: string) => {
    setParams({ ...params, finalDate });
  };

  const { data: reports, isLoading } = useQuery({
    queryKey: ["reports", params],
    queryFn: async () => SolicitationsPerVet(params),
  });

  const reportSeries: number[] | undefined = reports?.data.map(
    (report) => report._count.solicitations
  );

  return (
    <>
      <Header navIsVisible />
      <div className="flex flex-col gap-32 pt-16 max-w-7xl m-auto pb-20">
        <p className="text-center font-semibold text-4xl">
          Relatório de exames <br /> solicitados por Veterinários
        </p>
        <div>
          <p className="text-center mb-6 text-black/50">
            Filtrar relatório por Nome do cliente, pet ou veterinário, por data
            de inicio e data de fim.
          </p>
          <form action="" className="grid grid-cols-4">
            <div className="grid grid-cols-2">
              <Input
                type="date"
                className="rounded-sm bg-white border"
                onChange={(ev) => {
                  let dateInit = new Date(ev.target.value);
                  dateInit.setDate(dateInit.getDate() - 1);

                  handleMutateInitialDateByParams(
                    dateInit.toISOString().replace(/:/g, "%3A")
                  );
                }}
              />
              <Input
                type="date"
                className="rounded-sm bg-white border"
                onChange={(ev) => {
                  let dateFinished = new Date(ev.target.value);
                  dateFinished.setDate(dateFinished.getDate() + 1);

                  handleMutateFinalDateByParams(
                    dateFinished.toISOString().replace(/:/g, "%3A")
                  );
                }}
              />
            </div>
            <div className="grid grid-cols-3 col-span-3">
              <Input
                onChange={(ev) => handleMutateNameByParams(ev.target.value)}
                placeholder="Nome do Cliente, Pet ou Vet:"
                className="rounded-sm bg-white border col-span-2"
              />
              <Button
                className="rounded-sm bg-white border flex gap-2"
                variant="outline"
              >
                <IoSearchOutline className="text-xl" /> Procurar
              </Button>
            </div>
          </form>
        </div>
        {isLoading ? (
          <div className="h-[30vh] w-full flex items-center justify-center">
            <ImSpinner8 className="animate-spin text-9xl" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-y-10">
            {reportSeries && reportSeries[0] === 0 ? (
              <p className="text-center col-span-2">
                Atualmente, não há dados disponíveis para exibição nesta sessão
                de relatórios. Este espaço será atualizado assim que for
                realizado o cadastro de uma guia!
              </p>
            ) : (
              <div className="grid grid-cols-2 col-span-2 grid-rows-2 ">
                <Graphic
                  seriesData={reportSeries}
                  dataDescriptions={reports?.data.map(
                    (report) =>
                      `${report.name} - Qtd Exames: ${report._count.solicitations}`
                  )}
                  typeChart="pie"
                />
                <Graphic
                  seriesData={reports?.data.map(
                    (report) => report._count.solicitations
                  )}
                  dataDescriptions={reports?.data.map(
                    (report) =>
                      `${report.name} - Qtd Exames: ${report._count.solicitations}`
                  )}
                  typeChart="donut"
                />

                <Graphic
                  seriesData={reports?.data.map(
                    (report) => report._count.solicitations
                  )}
                  typeChart="bar"
                  dataDescriptions={reports?.data.map(
                    (report) =>
                      `${report.name} - Qtd Exames: ${report._count.solicitations}`
                  )}
                />
                <Graphic
                  seriesData={reports?.data.map(
                    (report) => report._count.solicitations
                  )}
                  typeChart="area"
                  dataDescriptions={reports?.data.map(
                    (report) =>
                      `${report.name} - Qtd Exames: ${report._count.solicitations}`
                  )}
                />
              </div>
            )}
          </div>
        )}
        <ExhibitionReport reports={reports?.data} />
      </div>
    </>
  );
};
