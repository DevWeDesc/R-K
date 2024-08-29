import CreateManyExamsInExamsProfileUseCase from "../src/domain/useCases/ExamsInExamProfile/CreateManyExamsInExamsProfileUseCase";
import { prisma } from "../src/lib/prismaClient";
import { PopulateExamsSeed } from "./PopulateSeed/PopulateExams";
import PopulateExamsInExamProfile from "./PopulateSeed/PopulateExamsInExamProfile";
// import { PopulateExamsInExamProfile } from "./PopulateSeed/PopulateExamsinExamProfile";
import { PopulateExamProfilesSeed } from "./PopulateSeed/PopulateProfilesSeed";
import { ExamsData } from "./data/ExamsData";
import { ExamsInExamProfileDataSeed } from "./data/ExamsInExamProfileData";
import { ExamsProfilesData } from "./data/ExamsProfilesData";
import { createManyExamsInExamsProfileUseCase } from "../src/index";

async function main() {
  const populateExamsInExamProfile = new PopulateExamsInExamProfile(
    createManyExamsInExamsProfileUseCase
  );

  await PopulateExamsSeed(ExamsData).then(() =>
    console.log("Exames cadastrados com sucesso!")
  );
  // await PopulateExamProfilesSeed(ExamsProfilesData).then(() =>
  //   console.log("Perfil de exames cadastrados com sucesso!")
  // );
  await populateExamsInExamProfile
    .execute(ExamsInExamProfileDataSeed)
    .then(() =>
      console.log("Exames cadasrados nos perfis de exams com sucesso!")
    );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
