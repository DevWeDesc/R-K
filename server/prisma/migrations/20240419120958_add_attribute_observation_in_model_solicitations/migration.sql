/*
  Warnings:

  - Added the required column `observation` to the `Solicitations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solicitations" ADD COLUMN     "observation" TEXT NOT NULL;
