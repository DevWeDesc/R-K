import { Header } from "@/components/Header";
import { Graphic } from "./Graphics";

export const Reports = () => {
  return (
    <>
      <Header navIsVisible />
      <div className=" flex flex-col gap-32 pt-16 max-w-5xl m-auto">
        <p className="text-center font-semibold text-4xl">
          Relatório de exames <br /> solicitados por Veterinários
        </p>
        <div className="grid grid-cols-2 gap-y-10">
          <Graphic typeChart="pie" />
          <Graphic typeChart="donut" />
          <div className="w-full col-span-2">
            <Graphic
              typeChart="bar"
              dataDescriptions={["Daniel", "Felipe", "Adriano"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
