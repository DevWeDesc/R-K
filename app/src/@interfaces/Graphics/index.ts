import { TypeChartEnum } from "@/enums/TypeChartEnum";

export interface IgraphicProps {
  seriesData?: number[];
  typeChart: keyof typeof TypeChartEnum;
  dataDescriptions?: string[];
}
