/*
  Warnings:

  - You are about to drop the column `clientsId` on the `Pets` table. All the data in the column will be lost.
  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Pets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pets" DROP CONSTRAINT "Pets_clientsId_fkey";

-- DropIndex
DROP INDEX "Pets_clientsId_key";

-- AlterTable
ALTER TABLE "Pets" DROP COLUMN "clientsId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Clients";

-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_phone_key" ON "Customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Pets_customerId_key" ON "Pets"("customerId");

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
