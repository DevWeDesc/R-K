-- CreateEnum
CREATE TYPE "TypeOfRadiologySection" AS ENUM ('Skull', 'Skull_Dental_Arch', 'Members', 'Pelvic_Limb', 'Abdomen', 'Chest', 'Spine', 'Projections', 'Cervical_Region');

-- CreateTable
CREATE TABLE "ExamsProfileInSolicitation" (
    "id" TEXT NOT NULL,
    "examProfileId" TEXT,
    "solicitationsId" TEXT,

    CONSTRAINT "ExamsProfileInSolicitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RadiologySections" (
    "id" SERIAL NOT NULL,
    "radiologyInSolicitationId" TEXT,
    "typeOfRadiologySection" "TypeOfRadiologySection" NOT NULL,
    "sedated" BOOLEAN,
    "clinicalSuspicion" TEXT,
    "region" TEXT[],
    "side" TEXT[],
    "articulation" TEXT[],
    "observation" TEXT,

    CONSTRAINT "RadiologySections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RadiologyInSolicitation" (
    "id" TEXT NOT NULL,
    "solicitationId" TEXT NOT NULL,

    CONSTRAINT "RadiologyInSolicitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RadiologyInSolicitation_solicitationId_key" ON "RadiologyInSolicitation"("solicitationId");

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_examProfileId_fkey" FOREIGN KEY ("examProfileId") REFERENCES "ExamsProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamsProfileInSolicitation" ADD CONSTRAINT "ExamsProfileInSolicitation_solicitationsId_fkey" FOREIGN KEY ("solicitationsId") REFERENCES "Solicitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadiologySections" ADD CONSTRAINT "RadiologySections_radiologyInSolicitationId_fkey" FOREIGN KEY ("radiologyInSolicitationId") REFERENCES "RadiologyInSolicitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadiologyInSolicitation" ADD CONSTRAINT "RadiologyInSolicitation_solicitationId_fkey" FOREIGN KEY ("solicitationId") REFERENCES "Solicitations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
