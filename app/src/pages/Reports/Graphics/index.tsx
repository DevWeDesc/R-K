import { IgraphicProps } from "@/@interfaces/Graphics";
import { IChartOptions } from "@/@interfaces/Graphics/IChartOptions";
import ReactApexChart from "react-apexcharts";

export const Graphic = ({
  dataDescriptions,
  seriesData,
  typeChart,
}: IgraphicProps) => {
  let chartOptions: IChartOptions = { labels: [], series: [] };

  if (typeChart === "pie" || typeChart === "donut") {
    chartOptions = {
      series: seriesData ? seriesData : [20, 10, 5],
      labels: dataDescriptions
        ? dataDescriptions
        : ["Daniel", "Felipe", "Adriano"],
    };
  } else {
    chartOptions = {
      options: {
        colors: ["#000"],
        xaxis: {
          categories: dataDescriptions
            ? dataDescriptions
            : ["Daniel", "Felipe", "Adriano"],
        },
      },
      series: [
        { name: "Qtd. Exames", data: seriesData ? seriesData : [20, 10, 5] },
      ],
    };
  }

  return (
    <ReactApexChart
      options={
        typeChart === "pie" || typeChart === "donut"
          ? chartOptions
          : chartOptions.options
      }
      series={chartOptions.series}
      type={typeChart}
    />
  );
};
