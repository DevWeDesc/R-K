export interface IChartOptions {
  series: number[] | [{ name: string; data: number[] }];
  labels?: string[];
  options?: {
    colors?: string[];
    xaxis: {
      categories: string[];
    };
  };
}
