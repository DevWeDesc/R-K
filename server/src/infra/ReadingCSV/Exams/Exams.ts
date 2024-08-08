import { ExamTypeEnum } from "../../../domain/enums/ExamTypeEnum";
import { prisma } from "../../../lib/prismaClient";
import XLSX from "xlsx";

interface IDataExams {
  id: number;
  name: string;
  value: number;
  valueWithRate: string;
  specie: string;
  group: string;
  deadline: number;
  deadlineInDays: string;
  isHighligth: string;
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
      .findUnique({ where: { idOld: id } })
      .then(async (res) => {
        if (res)
          await prisma.exams.update({
            where: { idOld: id },
            data: {
              preparing,
            },
          });
      });

    await prisma.exams.updateMany({
      where: { preparing: null },
      data: { preparing: "Sem preparo." },
    });
  }
};

const PopullateExams = async (dataExams: IDataExams[]) => {
  for (const exam of dataExams) {
    const {
      deadline,
      deadlineInDays,
      name,
      value,
      id,
      isHighligth,
      valueWithRate,
      specie,
    } = exam;

    const primaryLetter = name.substring(0, 1).toUpperCase();
    const nameFormatted = primaryLetter.concat(
      name.substring(1, name.length).toLocaleLowerCase()
    );
    const deadlineFormatted = `${deadline} ${deadlineInDays}`;

    const typeExam = exam.group
      .toLocaleUpperCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "_");

    if (Object.values(ExamTypeEnum).includes(typeExam as ExamTypeEnum)) {
      const examType = { typeExam: typeExam as ExamTypeEnum };

      await prisma.exams
        .findUnique({
          where: { name: nameFormatted, idOld: id },
        })
        .then(async (res) => {
          if (!res)
            await prisma.exams.create({
              data: {
                idOld: id,
                value,
                name: nameFormatted,
                deadline: deadlineFormatted,
                valueWithRate: parseFloat(valueWithRate),
                isHighligth: isHighligth === "false" ? false : true,
                specie: specie ? specie : "",
                typeExam: examType.typeExam,
              },
            });
        });
    }
  }
};
