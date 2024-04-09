-- CreateTable
CREATE TABLE "Exams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "groupId" INTEGER,

    CONSTRAINT "Exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "preparing" JSONB NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exams" ADD CONSTRAINT "Exams_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
