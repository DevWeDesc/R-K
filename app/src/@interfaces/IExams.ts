export interface IExams {
  id: number;
  name: string;
  price: number;
}

export interface IListExams {
  headerTable: string[];
  exams: IExams[];
}
