/*
  Warnings:

  - A unique constraint covering the columns `[radiologyInSolicitationId,typeOfRadiologySection]` on the table `RadiologySections` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RadiologySections_radiologyInSolicitationId_typeOfRadiology_key" ON "RadiologySections"("radiologyInSolicitationId", "typeOfRadiologySection");
