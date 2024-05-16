export interface IExams {
  id: number;
  name: string;
  value: number;
  preparing: string;
  deadline: string;
  groupsId: null | number;
  group: null | number;
}

export interface IListExams {
  headerTable: string[];
  exams: IExams[];
}
