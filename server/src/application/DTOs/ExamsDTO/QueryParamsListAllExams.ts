import { FilterByValueType } from "./FIlterByValueExam";

export interface QueryParamsListAllExams {
  name?: string;
  pageActual?: number;
  filterByValue?: FilterByValueType;
}
