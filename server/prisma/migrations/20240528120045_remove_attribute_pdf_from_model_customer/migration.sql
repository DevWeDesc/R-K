/*
  Warnings:

  - You are about to drop the column `cpf` on the `Customers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Customers_cpf_key";

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "cpf";
