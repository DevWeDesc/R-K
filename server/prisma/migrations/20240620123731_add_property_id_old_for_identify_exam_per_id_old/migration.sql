/*
  Warnings:

  - A unique constraint covering the columns `[idOld]` on the table `Exams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idOld` to the `Exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exams" ADD COLUMN     "idOld" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Exams_idOld_key" ON "Exams"("idOld");
