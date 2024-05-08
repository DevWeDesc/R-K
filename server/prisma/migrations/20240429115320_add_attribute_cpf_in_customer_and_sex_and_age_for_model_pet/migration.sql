/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SexEnum" AS ENUM ('Macho', 'Femea');

-- AlterTable
ALTER TABLE "Customers" ADD COLUMN     "cpf" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "sex" "SexEnum" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customers_cpf_key" ON "Customers"("cpf");
