/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Solicitations` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Solicitations" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Solicitations_slug_key" ON "Solicitations"("slug");
