/*
  Warnings:

  - Added the required column `isHighligth` to the `Exams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueWithRate` to the `Exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exams" ADD COLUMN     "isHighligth" BOOLEAN NOT NULL,
ADD COLUMN     "valueWithRate" DOUBLE PRECISION NOT NULL;
