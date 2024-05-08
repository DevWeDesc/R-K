import { readFileExams } from "./Exams/Exams";

export const Popullate = async () => {
  await readFileExams("Exams", "PlanilhaExamesRK", "ListExamsRK").then(() =>
    console.log("Exames cadastrados com sucesso!")
  );
  await readFileExams(
    "Exams",
    "InstructionsSheet",
    "PeparingListForExams"
  ).then(() => console.log("Preparos cadastrados com sucesso!"));
};

Popullate();
