/*
  Warnings:

  - Added the required column `typeExam` to the `Exams` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExamTypeEnum" AS ENUM ('HEMATOLOGIA', 'BIOQUIMICA_CLINICA', 'IMUNOLOGIA', 'MICROBIOLOGIA', 'URINA', 'FEZES', 'HORMONIOS', 'PATOLOGIA', 'BIOLOGIA_MOLECULAR', 'CARDIOLOGIA', 'ULTRASSONOGRAFIA');

-- AlterTable
ALTER TABLE "Exams" ADD COLUMN     "typeExam" "ExamTypeEnum" NOT NULL,
ALTER COLUMN "value" DROP NOT NULL,
ALTER COLUMN "isHighligth" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ExamsInExamProfile" (
    "id" SERIAL NOT NULL,
    "examsId" INTEGER NOT NULL,
    "examsProfileId" INTEGER NOT NULL,

    CONSTRAINT "ExamsInExamProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamsProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExamsProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamsProfile_name_key" ON "ExamsProfile"("name");

-- AddForeignKey
ALTER TABLE "ExamsInExamProfile" ADD CONSTRAINT "ExamsInExamProfile_examsId_fkey" FOREIGN KEY ("examsId") REFERENCES "Exams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsInExamProfile" ADD CONSTRAINT "ExamsInExamProfile_examsProfileId_fkey" FOREIGN KEY ("examsProfileId") REFERENCES "ExamsProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
