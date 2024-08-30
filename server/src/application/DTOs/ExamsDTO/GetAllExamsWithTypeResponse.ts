import { Exams } from "@prisma/client";

export interface GetAllExamsWithTypeResponse {
  hematology: Exams[] | Exams;
  biochemistry: Exams[] | Exams;
  urine: Exams[] | Exams;
  feces: Exams[] | Exams;
  microbiology: Exams[] | Exams;
  dermatology: Exams[] | Exams;
  hormones: Exams[] | Exams;
  pathology: Exams[] | Exams;
  pathologySecondPart: Exams[] | Exams;
  immunology: Exams[] | Exams;
  molecularBiology: Exams[] | Exams;
  cardiology: Exams[] | Exams;
  ultrasound: Exams[] | Exams;
  not_defined: Exams[] | Exams;
}
