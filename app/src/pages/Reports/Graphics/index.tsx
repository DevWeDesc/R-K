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
      series: seriesData,
      labels: dataDescriptions,
    };
  } else {
    chartOptions = {
      options: {
        colors: ["#BD2A2E"],
        xaxis: {
          categories: dataDescriptions,
        },
      },
      series: [{ name: "Qtd. Exames", data: seriesData }],
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
