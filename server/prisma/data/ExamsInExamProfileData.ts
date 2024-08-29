import { CreateManyExamsInExamsProfileRequestDTO } from "../../src/application/DTOs/ExamsInExamProfile/CreateManyExamsInExamsProfileRequestDTO";

export interface IExamsInExamProfileDataSeed {
  examName: string;
  profileName: string;
}

export const ExamsInExamProfileDataSeed: CreateManyExamsInExamsProfileRequestDTO[] =
  [
    {
      nameProfile: "Perfil Felino",
      exams: ["Hemograma", "Uréia", "Creatinina", "ALT", "GGT", "Frutosamina"],
    },
    {
      nameProfile: "Perfil Simples",
      exams: ["Hemograma", "ALT", "Creatinina"],
    },
    {
      nameProfile: "Perfil 1",
      exams: ["Hemograma", "ALT", "FAL"],
    },
    {
      nameProfile: "Perfil 2",
      exams: ["Hemograma", "Uréia", "Creatinina"],
    },
    {
      nameProfile: "Perfil 3",
      exams: ["Hemograma", "Uréia", "Creatinina", "ALT", "FAL"],
    },
    {
      nameProfile: "Perfil Renal",
      exams: [
        "Uréia",
        "Creatinina",
        "Cálcio Total",
        "Fósforo",
        "NA",
        "K",
        "Urina 1",
        "Relação Proteína / Creatinina Urinária",
      ],
    },
    {
      nameProfile: "Perfil Renal 1 Completo",
      exams: [
        "Hemograma",
        "Uréia",
        "Creatinina",
        "Cálcio Total",
        "Fósforo",
        "NA",
        "K",
        "Urina 1",
        "Relação Proteína / Creatinina Urinária",
        "SDMA",
      ],
    },
    {
      nameProfile: "Perfil Renal 2",
      exams: [
        "Creatinina",
        "Cálcio Total",
        "Fósforo",
        "NA",
        "K",
        "Uréia",
        "Urina 1",
      ],
    },
    {
      nameProfile: "Perfil Renal 3 Monitoração",
      exams: [
        "Hemograma",
        "Uréia",
        "Creatinina",
        "Cálcio Total",
        "Fósforo",
        "NA",
        "K",
        "SDMA",
      ],
    },
    {
      nameProfile: "Perfil Senil",
      exams: [
        "Hemograma",
        "Creatinina",
        "FAL",
        "Fósforo",
        "Uréia",
        "ALT",
        "Urina 1",
        "Glicose",
        "Relação Proteína / Creatinina urinária",
      ],
    },
    {
      nameProfile: "Perfil Senil 1",
      exams: [
        "Hemograma",
        "Uréia",
        "Creatinina",
        "ALT",
        "FAL",
        "Glicose",
        "Colesterol e Triglicérides",
      ],
    },
    {
      nameProfile: "Perfil Senil 2",
      exams: ["Hemograma", "Uréia", "Creatinina", "FAL", "Glicose", "Urina 1"],
    },

    {
      nameProfile: "Perfil Hepático",
      exams: [
        "Hemograma",
        "AST",
        "ALT",
        "FAL",
        "GGT",
        "Glicose",
        "Proteina Total e Frações (Albumina + Globulina)",
        "Bilirrubina Total e Frações (BD + BI)",
      ],
    },

    {
      nameProfile: "Perfil Check Up 1",
      exams: [
        "Hemograma",
        "Uréia",
        "Creatinina",
        "ALT",
        "AST",
        "Fosfatase Alcalina",
        "GGT",
        "Colesterol",
        "Triglicérides",
        "Proteina Total e Frações (Albumina + Globulina)",
        "Bilirrubina Total e Fraçoes (BD + BI)",
        "Amilase",
        "Lipase",
        "Glicose",
        "Frutosamina",
        "Cálcio Total",
        "Fósforo",
        "Sódio",
        "Potássio",
        "Cálcio Iônico",
      ],
    },

    {
      nameProfile: "Perfil Check Up 2",
      exams: [
        "Hemograma",
        "Uréia",
        "Creatinina",
        "ALT",
        "AST",
        "Fosfatase Alcalina",
        "GGT",
        "Colesterol",
        "Triglicérides",
        "Proteina Total e Frações (Albumina + Globulina)",
        "Bilirrubina Total e Fraçoes (BD + BI)",
        "Amilase",
        "Lipase",
        "Glicose",
        "Frutosamina",
        "Cálcio Total",
        "Fósforo",
        "Sódio",
        "Potássio",
        "Cálcio Iônico",
        "Urina 1",
        "Relação Proteina / Creatinina Urinária",
      ],
    },

    {
      nameProfile: "Perfil Coagulação",
      exams: ["TP", "TTPA", "Fibrinogênio", "Contagem Plaquetária"],
    },

    {
      nameProfile: "Perfil Cirúrgico",
      exams: ["Hemograma", "Uréia", "Creatinina", "FAL", "ALT", "ECG"],
    },

    {
      nameProfile: "Perfil Eletrólitos 1",
      exams: ["Sódio", "Potássio", "Cálcio"],
    },

    {
      nameProfile: "Perfil Eletrólitos 2",
      exams: ["Sódio", "Potássio", "Cloretos"],
    },
  ];
