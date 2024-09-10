/*
  Warnings:

  - Made the column `examProfileId` on table `ExamsProfileInSolicitation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `solicitationsId` on table `ExamsProfileInSolicitation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ExamsProfileInSolicitation" DROP CONSTRAINT "ExamsProfileInSolicitation_examProfileId_fkey";

-- DropForeignKey
ALTER TABLE "ExamsProfileInSolicitation" DROP CONSTRAINT "ExamsProfileInSolicitation_solicitationsId_fkey";

-- AlterTable
ALTER TABLE "ExamsProfileInSolicitation" ALTER COLUMN "examProfileId" SET NOT NULL,
ALTER COLUMN "solicitationsId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_examProfileId_fkey" FOREIGN KEY ("examProfileId") REFERENCES "ExamsProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
