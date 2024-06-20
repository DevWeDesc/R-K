/*
  Warnings:

  - Added the required column `specie` to the `Exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exams" ADD COLUMN     "specie" TEXT NOT NULL;
