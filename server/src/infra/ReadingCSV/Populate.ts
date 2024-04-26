import { readFileExams } from "./Exams/Exams";

export const Popullate = async () => {
  await readFileExams("Exams", "PlanilhaExamesRK", "ListExamsRK");
  await readFileExams("Exams", "InstructionsSheet", "PeparingListForExams");
};

Popullate();
