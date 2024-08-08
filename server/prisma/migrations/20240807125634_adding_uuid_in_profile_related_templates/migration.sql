/*
  Warnings:

  - The primary key for the `ExamsInExamProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExamsProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ExamsInExamProfile" DROP CONSTRAINT "ExamsInExamProfile_examsProfileId_fkey";

-- AlterTable
ALTER TABLE "ExamsInExamProfile" DROP CONSTRAINT "ExamsInExamProfile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "examsProfileId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExamsInExamProfile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExamsInExamProfile_id_seq";

-- AlterTable
ALTER TABLE "ExamsProfile" DROP CONSTRAINT "ExamsProfile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExamsProfile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExamsProfile_id_seq";

-- AddForeignKey
ALTER TABLE "ExamsInExamProfile" ADD CONSTRAINT "ExamsInExamProfile_examsProfileId_fkey" FOREIGN KEY ("examsProfileId") REFERENCES "ExamsProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
