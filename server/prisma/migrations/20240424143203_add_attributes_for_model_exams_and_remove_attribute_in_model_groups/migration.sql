/*
  Warnings:

  - The values [Canina] on the enum `SpecieEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `groupId` on the `Exams` table. All the data in the column will be lost.
  - You are about to drop the column `preparing` on the `Groups` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Exams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `deadline` to the `Exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SpecieEnum_new" AS ENUM ('Canino', 'Felino', 'CaninaAndFelino');
ALTER TABLE "Pets" ALTER COLUMN "specie" TYPE "SpecieEnum_new" USING ("specie"::text::"SpecieEnum_new");
ALTER TYPE "SpecieEnum" RENAME TO "SpecieEnum_old";
ALTER TYPE "SpecieEnum_new" RENAME TO "SpecieEnum";
DROP TYPE "SpecieEnum_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Exams" DROP CONSTRAINT "Exams_groupId_fkey";

-- AlterTable
ALTER TABLE "Exams" DROP COLUMN "groupId",
ADD COLUMN     "deadline" TEXT NOT NULL,
ADD COLUMN     "groupsId" INTEGER,
ADD COLUMN     "preparing" TEXT;

-- AlterTable
ALTER TABLE "Groups" DROP COLUMN "preparing";

-- CreateIndex
CREATE UNIQUE INDEX "Exams_name_key" ON "Exams"("name");

-- AddForeignKey
ALTER TABLE "Exams" ADD CONSTRAINT "Exams_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
