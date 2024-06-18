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
import { FormatDateIsoStringForQuery } from "@/utils/FormatDateIsoStringForQuery";

export const Reports = () => {
  const handleGenerateInitialDate = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    let dateInit = new Date(ev.target.value);
    // dateInit.setDate(dateInit.getDate() - 1);

    handleMutateInitialDateByParams(
      dateInit.toISOString().replace(/:/g, "%3A")
    );
  };

  const handleGenerateFinalDate = (dateFinal?: string) => {
    const dateFinished = dateFinal ? new Date(dateFinal) : new Date();
    // dateFinished.setDate(dateFinished.getDate() + 1);
    return FormatDateIsoStringForQuery(dateFinished.toISOString());
  };

  const [params, setParams] = useState({
    initialDate: null,
    finalDate: handleGenerateFinalDate(),
    nameVeterinarian: null,
    nameCustomer: null,
    namePet: null,
  } as ParamsSolicitationsPerVet);

  const handleMutateNameVeterinarianByParams = (nameVeterinarian: string) => {
    setParams({ ...params, nameVeterinarian });
  };

  const handleMutateNameCustomerByParams = (nameCustomer: string) => {
    setParams({ ...params, nameCustomer });
  };
  const handleMutateNamePetByParams = (namePet: string) => {
    setParams({ ...params, namePet });
  };

  const handleMutateInitialDateByParams = (initialDate: string) => {
    setParams({ ...params, initialDate });
  };

  const handleMutateFinalDateByParams = (finalDate: string) => {
    setParams({ ...params, finalDate });
  };

  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => SolicitationsPerVet(params),
  });

  console.log(reports);

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
              <div>
                <label htmlFor="dateInitial" className="text-sm">
                  Data inicial
                </label>
                <Input
                  id="dateInitial"
                  type="date"
                  className="rounded-sm bg-white border"
                  onChange={handleGenerateInitialDate}
                />
              </div>
              <div>
                <label htmlFor="dateFinal" className="text-sm">
                  Data final
                </label>
                <Input
                  id="dateFinal"
                  type="date"
                  className="rounded-sm bg-white border"
                  onChange={(ev) => {
                    handleMutateFinalDateByParams(
                      FormatDateIsoStringForQuery(
                        handleGenerateFinalDate(ev.target.value)
                      )
                    );
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 col-span-3">
              <div>
                <label htmlFor="nameCustomer" className="text-sm">
                  Nome do cliente
                </label>
                <Input
                  id="nameCustomer"
                  onChange={(ev) =>
                    handleMutateNameCustomerByParams(ev.target.value)
                  }
                  placeholder="Nome do Cliente"
                  className="rounded-sm bg-white border col-span-1"
                />
              </div>
              <div>
                <label htmlFor="namePet" className="text-sm">
                  Nome do Pet
                </label>
                <Input
                  id="namePet"
                  onChange={(ev) =>
                    handleMutateNamePetByParams(ev.target.value)
                  }
                  placeholder="Nome do Pet"
                  className="rounded-sm bg-white border col-span-1"
                />
              </div>
              <div>
                <label htmlFor="nameVet" className="text-sm">
                  Nome do Veterinário
                </label>
                <Input
                  id="nameVet"
                  onChange={(ev) =>
                    handleMutateNameVeterinarianByParams(ev.target.value)
                  }
                  placeholder="Nome do Veterinário"
                  className="rounded-sm bg-white border col-span-1"
                />
              </div>
              <Button
                type="button"
                onClick={() => refetch()}
                className="rounded-sm bg-white border flex gap-2 col-span-2"
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
