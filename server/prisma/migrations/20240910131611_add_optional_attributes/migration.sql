-- DropForeignKey
ALTER TABLE "ExamsProfileInSolicitation" DROP CONSTRAINT "ExamsProfileInSolicitation_examProfileId_fkey";

-- DropForeignKey
ALTER TABLE "ExamsProfileInSolicitation" DROP CONSTRAINT "ExamsProfileInSolicitation_solicitationsId_fkey";

-- AlterTable
ALTER TABLE "ExamsProfileInSolicitation" ALTER COLUMN "examProfileId" DROP NOT NULL,
ALTER COLUMN "solicitationsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_examProfileId_fkey" FOREIGN KEY ("examProfileId") REFERENCES "ExamsProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
