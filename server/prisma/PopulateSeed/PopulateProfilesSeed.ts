import { prisma } from "../../src/lib/prismaClient";
import { IExamsProfilesDataSeed } from "../data/ExamsProfilesData";

export const PopulateExamProfilesSeed = async (
  dataExamProfiles: IExamsProfilesDataSeed[]
) => {
  await prisma.$transaction(async () => {
    for (const examProfile of dataExamProfiles) {
      const { name } = examProfile;

      await prisma.examsProfile
        .findUnique({ where: { name } })
        .then(async (res) => {
          if (!res)
            return await prisma.examsProfile.create({
              data: { name },
            });

          throw new Error("Exame já existe no sistema!");
        });
    }
  });
};
