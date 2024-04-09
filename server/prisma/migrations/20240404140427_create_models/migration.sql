-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'Veterinarian');

-- CreateEnum
CREATE TYPE "SpecieEnum" AS ENUM ('Canina', 'Felino');

-- CreateTable
CREATE TABLE "UsersLogin" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "roleUser" "UserRole" NOT NULL,

    CONSTRAINT "UsersLogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veterinarians" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "crmv" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "usersLoginId" INTEGER NOT NULL,

    CONSTRAINT "Veterinarians_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specie" "SpecieEnum" NOT NULL,
    "clientsId" INTEGER NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersLogin_id_key" ON "UsersLogin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarians_id_key" ON "Veterinarians"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarians_crmv_key" ON "Veterinarians"("crmv");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarians_usersLoginId_key" ON "Veterinarians"("usersLoginId");

-- CreateIndex
CREATE UNIQUE INDEX "Pets_clientsId_key" ON "Pets"("clientsId");

-- AddForeignKey
ALTER TABLE "Veterinarians" ADD CONSTRAINT "Veterinarians_usersLoginId_fkey" FOREIGN KEY ("usersLoginId") REFERENCES "UsersLogin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
