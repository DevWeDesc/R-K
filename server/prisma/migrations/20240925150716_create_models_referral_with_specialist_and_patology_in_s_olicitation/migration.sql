-- AlterTable
ALTER TABLE "Solicitations" ADD COLUMN     "otherExams" TEXT[];

-- CreateTable
CREATE TABLE "ReferralWithSpecialist" (
    "id" TEXT NOT NULL,
    "veterinarianId" INTEGER NOT NULL,
    "solicitationId" TEXT NOT NULL,
    "historic" TEXT,

    CONSTRAINT "ReferralWithSpecialist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatologyInSolicitation" (
    "id" TEXT NOT NULL,
    "solicitationId" TEXT NOT NULL,
    "numberOfInjuries" TEXT,
    "collectionregion" TEXT,
    "underTreatment" TEXT,
    "history_Suspicion_Note" TEXT,
    "evolutionTime" TEXT,
    "size" TEXT,

    CONSTRAINT "PatologyInSolicitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReferralWithSpecialist_solicitationId_key" ON "ReferralWithSpecialist"("solicitationId");

-- CreateIndex
CREATE UNIQUE INDEX "PatologyInSolicitation_solicitationId_key" ON "PatologyInSolicitation"("solicitationId");

-- AddForeignKey
ALTER TABLE "ReferralWithSpecialist" ADD CONSTRAINT "ReferralWithSpecialist_veterinarianId_fkey" FOREIGN KEY ("veterinarianId") REFERENCES "Veterinarians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReferralWithSpecialist" ADD CONSTRAINT "ReferralWithSpecialist_solicitationId_fkey" FOREIGN KEY ("solicitationId") REFERENCES "Solicitations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatologyInSolicitation" ADD CONSTRAINT "PatologyInSolicitation_solicitationId_fkey" FOREIGN KEY ("solicitationId") REFERENCES "Solicitations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
