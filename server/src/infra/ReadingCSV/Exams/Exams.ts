import { prisma } from "../../../lib/prismaClient";
import XLSX from "xlsx";

interface IDataExams {
  id: number;
  name: string;
  value: number;
  valueWithRate: number;
  specie: string;
  group: string;
  deadline: number;
  deadlineInDays: string;
}

interface IDataInstructions {
  nameExam: string;
  id: number;
  nameSector: string;
  sector: string;
  value: number;
  valueUrg: number;
  preparing: string;
}

export const readFileExams = async (
  pathName: string,
  nameFile: string,
  sheetName: string
) => {
  const file = `./src/infra/ReadingCSV/${pathName}/${nameFile}.xlsx`;
  const fileRead = XLSX.readFile(file);
  const fileSheets = fileRead.Sheets[`${sheetName}`];
  const dataExams: any = XLSX.utils.sheet_to_json(fileSheets);

  if (nameFile === "InstructionsSheet") await AddInstructions(dataExams);
  else await PopullateExams(dataExams);
};

const AddInstructions = async (dataExams: IDataInstructions[]) => {
  for (const exam of dataExams) {
    const { id, preparing } = exam;

    await prisma.exams
      .update({
        where: { id, preparing: null },
        data: { preparing },
      })
      .then(() => {
        console.log(`Instrução cadastrada com sucesso!`);
      })
      .catch(() => {
        console.log(
          `Erro ao cadastrar instrução para o Exame ${exam.nameExam}`
        );
      });
  }
};

const PopullateExams = async (dataExams: IDataExams[]) => {
  for (const exam of dataExams) {
    const { deadline, deadlineInDays, name, value, id } = exam;

    const deadlineFormatted = `${deadline} ${deadlineInDays}`;

    await prisma.exams
      .create({ data: { name, deadline: deadlineFormatted, value, id } })
      .then(() => {
        console.log(`Exame ${name} cadastrado com sucesso!`);
      })
      .catch(() => {
        console.log(`Erro ao cadastrar o Exame ${name}`);
      });
  }
};
