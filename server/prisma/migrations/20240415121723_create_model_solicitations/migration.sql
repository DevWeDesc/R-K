-- AlterTable
ALTER TABLE "Exams" ADD COLUMN     "solicitationsId" TEXT;

-- CreateTable
CREATE TABLE "Solicitations" (
    "id" TEXT NOT NULL,
    "veterinariansId" INTEGER NOT NULL,
    "petsId" INTEGER NOT NULL,

    CONSTRAINT "Solicitations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exams" ADD CONSTRAINT "Exams_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitations" ADD CONSTRAINT "Solicitations_veterinariansId_fkey" FOREIGN KEY ("veterinariansId") REFERENCES "Veterinarians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitations" ADD CONSTRAINT "Solicitations_petsId_fkey" FOREIGN KEY ("petsId") REFERENCES "Pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
