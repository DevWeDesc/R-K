import { Header } from "@/components/Header";
import { Graphic } from "./Graphics";
import { useQuery } from "react-query";
import { SolicitationsPerVet } from "@/services/Solicitations/SolicitationsPerVet";
import { ImSpinner8 } from "react-icons/im";

export const Reports = () => {
  const { data: reports, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => SolicitationsPerVet(),
  });

  return (
    <>
      <Header navIsVisible />
      <div className=" flex flex-col gap-32 pt-16 max-w-5xl m-auto">
        <p className="text-center font-semibold text-4xl">
          Relatório de exames <br /> solicitados por Veterinários
        </p>
        {isLoading ? (
          <div className="h-[30vh] w-full flex items-center justify-center">
            <ImSpinner8 className="animate-spin text-9xl" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-y-10">
            <Graphic
              seriesData={reports?.data.map(
                (report) => report._count.solicitations
              )}
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
            <div className="w-full col-span-2">
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};
