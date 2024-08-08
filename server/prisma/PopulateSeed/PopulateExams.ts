import { prisma } from "../../src/lib/prismaClient";
import { IExamsData } from "../data/ExamsData";

export const PopulateExamsSeed = async (
  dataExams: IExamsData[]
): Promise<void> => {
  await prisma.$transaction(async () => {
    for (const exam of dataExams) {
      const { name } = exam;

      await prisma.exams.findUnique({ where: { name } }).then(async (res) => {
        if (!res)
          return await prisma.exams.create({
            data: exam,
          });

        throw new Error("Exame já existe no sistema!");
      });
    }
  });
};
