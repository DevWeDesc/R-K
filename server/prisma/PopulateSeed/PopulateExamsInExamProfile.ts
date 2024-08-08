import { prisma } from "../../src/lib/prismaClient";
import { IExamsInExamProfileDataSeed } from "../data/ExamsInExamProfileData";

export const PopulateExamsInExamProfile = async (
  dataExamsInExamProfile: IExamsInExamProfileDataSeed[]
): Promise<void> => {
  await prisma.$transaction(async () => {
    for (const examInExamProfile of dataExamsInExamProfile) {
      const { examName, profileName } = examInExamProfile;

      const exam = await prisma.exams.findFirst({
        where: { name: { startsWith: examName, mode: "insensitive" } },
      });

      if (!exam) throw new Error(`Exame ${examName} não encontrado!`);

      const profile = await prisma.examsProfile.findFirst({
        where: { name: { startsWith: profileName, mode: "insensitive" } },
      });

      if (!profile)
        throw new Error(`Perfil de exame ${profileName} não encontrado`);

      await prisma.examsInExamProfile.create({
        data: { examsId: exam.id, examsProfileId: profile.id },
      });
    }
  });
};
