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
    name: "Ácidos Biliares Pré-prandial",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Na (Sódio)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Ácidos Biliares Pós-prandial",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Creatinina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Proteína Total e Frações (Albumina + Globulina)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Albumina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Fosfatase Alcalina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "SDMA",
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
    name: "Fósforo",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "SPEC Canino",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "AST (TGO)",
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
  {
    name: "SPEC Felino",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Amilase",
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
    name: "Uréia",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Bilirrubina total e frações (D+I)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Glicose",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "TLI Canino",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Cálcio Iônico",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "K (Potássio)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Triglicérides",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Cálcio Total",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Lipase",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOQUIMICA_CLINICA" as ExamTypeEnum,
  },
  {
    name: "Relação Proteina / Creatinina Urinária",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "URINA" as ExamTypeEnum,
  },
  {
    name: "Urina1",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "URINA" as ExamTypeEnum,
  },
  {
    name: "Giárdia sp (Imunocromatografia)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "FEZES" as ExamTypeEnum,
  },
  {
    name: "Parasitológico de Fezes (Amostra Única)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "FEZES" as ExamTypeEnum,
  },
  {
    name: "Parasitológico de Fezes (3 Amostra)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "FEZES" as ExamTypeEnum,
  },
  {
    name: "Parvovírus (Imunocromatografia)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "FEZES" as ExamTypeEnum,
  },
  {
    name: "Pesquisa de Tritrichomonas (RK)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "FEZES" as ExamTypeEnum,
  },
  {
    name: "Cultura + Antibiograma (Bactérias)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "MICROBIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Cultura para Fungos",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "MICROBIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Bacterioscópico",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "MICROBIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Citologia de Ouvido (Pesquisa de Malassezia)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "DERMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Citologia de Pele (Pesquisa de Malassezia)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "DERMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Perfil Dematológico: Cultura para fungos + Cultura para bactérias + Antibiograma + Bacterioscópio + Ectoparasitas",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "DERMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Exame de ectoparasitas de Cerúmen",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "DERMATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Insulina",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Teste de Estimulação c/ ACTH (2 Amostras)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "17-OH-Progesterona Basal e Pós ACTH",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "T4 Total",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Teste de Supressão c/ Dexametasona (2 Amostras)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "17-OH-Progesterona Pós ACTH",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "TSH",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Teste de Supressão c/ Dexametasona (3 Amostras)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Cortisol Basal",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "T3",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Teste de Reposição Hormonal (T4 Basal e T4 Pós Pill)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Cortisol Pós ACTH",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "T4 Livre",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Painel Esteroidal Reduzido (Cort. Basal e Pós ACTH e 17-OH-Progesterona Basal e Pós ACTH)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Painel",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "HORMONIOS" as ExamTypeEnum,
  },
  {
    name: "Citologia Aspirativa",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Histopatológico/Material",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Citologia Vaginal",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Citológico/Material",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Histopatológico (Punch - coletado no R&K)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Histopatológico (Amostra recebida)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Imunoistoquímica",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Nódulo",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Placa",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Aderida",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Ulcerada",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Eritematosa",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Pigmentada",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Macia",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Firme",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Flutuante",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Alopécica",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },
  {
    name: "Pruriginosa",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "PATOLOGIA_SEGUNDA_PARTE" as ExamTypeEnum,
  },

  {
    name: "Leishmaniose (IFI + ELISA)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Teste Alérgico Completo (48 Testes) Alimentares e Ambientais",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Leptospirose (SAM)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "4 DX (Dirofilaria / Lyme / Anaplasma / Erhlichia)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },

  {
    name: "FIV e FeLV 🟪 ou 🟥",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Sorologia Babesia IgM IgG",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Cinomose (Imunocromatografia - Antígeno) 🟥 + Secreção",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Sorologia c/ Titulação de Erhlichia (IgG)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Avaliação Vacinal (IgG - Cinomose, Parvovirose e Hepatite)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Teste Alérgico (24 Testes) Alimentares Ambientais",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "IMUNOLOGIA" as ExamTypeEnum,
  },
  {
    name: "PCR Erhlichia",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR Giarda",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR Babesia",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR Parvovirose",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR KIT Carrapato (Erhlichia / Babesia / Anaplasma)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR Tritrichomonas",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR FIV Plus (RNA e DNA Pró Viral)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR Mycoplasma SPP",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR FELV Plus (RNA e DNA Pró Viral)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "PCR PIF (Líquido Ascítico)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "Painel Retroviroses Felina (FIV e FELV RNA e DNA Pró Viral)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "Painel Respiratório Felino (5 Agentes - Herpesvírus, Caliciví- rus, Clamydia, Mycoplasma SPP e Bordetella Bronchiséptica). Material: SWAB Conjuntival e Faringe Profundo",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "Painel Cinomose (Sangue, Urina e Secreções)",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "BIOLOGIA_MOLECULAR" as ExamTypeEnum,
  },
  {
    name: "Ecodopplercardiograma",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "CARDIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Eletrocardiograma",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "CARDIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Pressão Arterial",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "CARDIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Consulta",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "CARDIOLOGIA" as ExamTypeEnum,
  },
  {
    name: "Abdominal",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Abdominal + Perineal",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Abdominal + Partes moles",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Encéfalo",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Cervical",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Torax",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Gestacional",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Vascular com Doppler",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
  {
    name: "Partes moles",
    deadline: "",
    specie: "Macho / Fêmea",
    value: 200,
    typeExam: "ULTRASSONOGRAFIA" as ExamTypeEnum,
  },
];
