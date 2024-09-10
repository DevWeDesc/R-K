/*
  Warnings:

  - A unique constraint covering the columns `[examProfileId,solicitationsId]` on the table `ExamsProfileInSolicitation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExamsProfileInSolicitation_examProfileId_solicitationsId_key" ON "ExamsProfileInSolicitation"("examProfileId", "solicitationsId");
