/*
  Warnings:

  - Made the column `value` on table `Exams` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isHighligth` on table `Exams` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Exams" ALTER COLUMN "value" SET NOT NULL,
ALTER COLUMN "isHighligth" SET NOT NULL;
