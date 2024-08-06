/*
  Warnings:

  - A unique constraint covering the columns `[examsId]` on the table `ExamsInExamProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExamsInExamProfile_examsId_key" ON "ExamsInExamProfile"("examsId");
