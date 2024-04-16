/*
  Warnings:

  - You are about to drop the column `examsInPetOnSolicitationsId` on the `Exams` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exams" DROP CONSTRAINT "Exams_examsInPetOnSolicitationsId_fkey";

-- DropForeignKey
ALTER TABLE "ExamsInPetOnSolicitations" DROP CONSTRAINT "ExamsInPetOnSolicitations_solicitationsId_fkey";

-- DropIndex
DROP INDEX "ExamsInPetOnSolicitations_solicitationsId_key";

-- AlterTable
ALTER TABLE "Exams" DROP COLUMN "examsInPetOnSolicitationsId";

-- AlterTable
ALTER TABLE "ExamsInPetOnSolicitations" ADD COLUMN     "examsId" INTEGER,
ALTER COLUMN "solicitationsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamsInPetOnSolicitations" ADD CONSTRAINT "ExamsInPetOnSolicitations_examsId_fkey" FOREIGN KEY ("examsId") REFERENCES "Exams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsInPetOnSolicitations" ADD CONSTRAINT "ExamsInPetOnSolicitations_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
