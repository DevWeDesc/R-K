/*
  Warnings:

  - You are about to drop the column `solicitationsId` on the `Exams` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exams" DROP CONSTRAINT "Exams_solicitationsId_fkey";

-- AlterTable
ALTER TABLE "Exams" DROP COLUMN "solicitationsId",
ADD COLUMN     "examsInPetOnSolicitationsId" TEXT;

-- CreateTable
CREATE TABLE "ExamsInPetOnSolicitations" (
    "id" TEXT NOT NULL,
    "solicitationsId" TEXT NOT NULL,

    CONSTRAINT "ExamsInPetOnSolicitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamsInPetOnSolicitations_solicitationsId_key" ON "ExamsInPetOnSolicitations"("solicitationsId");

-- AddForeignKey
ALTER TABLE "Exams" ADD CONSTRAINT "Exams_examsInPetOnSolicitationsId_fkey" FOREIGN KEY ("examsInPetOnSolicitationsId") REFERENCES "ExamsInPetOnSolicitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsInPetOnSolicitations" ADD CONSTRAINT "ExamsInPetOnSolicitations_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
