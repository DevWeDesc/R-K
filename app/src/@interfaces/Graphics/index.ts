import { TypeChartEnum } from "@/enums/TypeChartEnum";

export interface IgraphicProps {
  seriesData: any;
  typeChart: keyof typeof TypeChartEnum;
  dataDescriptions: any;
}
