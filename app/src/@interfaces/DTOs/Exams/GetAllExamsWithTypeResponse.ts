import { IExams } from "@/@interfaces/IExams";

export interface GetAllExamsWithTypeResponse {
  hematology: IExams[];
  biochemistry: IExams[];
  urine: IExams[];
  feces: IExams[];
  microbiology: IExams[];
  dermatology: IExams[];
  hormones: IExams[];
  pathology: IExams[];
  pathologySecondPart: IExams[];
  immunology: IExams[];
  molecularBiology: IExams[];
  cardiology: IExams[];
  ultrasound: IExams[];
}
