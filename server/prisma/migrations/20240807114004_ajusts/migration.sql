-- DropForeignKey
ALTER TABLE "ExamsInExamProfile" DROP CONSTRAINT "ExamsInExamProfile_examsId_fkey";

-- DropForeignKey
ALTER TABLE "ExamsInExamProfile" DROP CONSTRAINT "ExamsInExamProfile_examsProfileId_fkey";

-- AlterTable
ALTER TABLE "ExamsInExamProfile" ALTER COLUMN "examsId" DROP NOT NULL,
ALTER COLUMN "examsProfileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamsInExamProfile" ADD CONSTRAINT "ExamsInExamProfile_examsId_fkey" FOREIGN KEY ("examsId") REFERENCES "Exams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsInExamProfile" ADD CONSTRAINT "ExamsInExamProfile_examsProfileId_fkey" FOREIGN KEY ("examsProfileId") REFERENCES "ExamsProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
