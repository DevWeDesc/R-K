import { ExamTypeEnum } from "@prisma/client";

export interface IExamsData {
  name: string;
  deadline: string;
  specie: string;
  value: number;
  typeExam: ExamTypeEnum;
}

export const ExamsData: IExamsData[] = [
  {
    name: "Hemograma",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Pesquisa de Corpúsculos de Lentz",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Contagem Plaquetária",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Pesquisa de Hematozoários",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Prova de Coagulação (TS e TC)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Pesquisa de Reticulócitos",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HEMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Relação Proteina / Creatinina Urinária",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "URINA" as ExamTypeEnum,
  },
  {
    name: "Creatinina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "ALT (TGP)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "GGT",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Frutosamina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
];
