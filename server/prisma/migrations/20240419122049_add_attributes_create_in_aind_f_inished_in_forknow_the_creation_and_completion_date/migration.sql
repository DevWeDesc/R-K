-- AlterTable
ALTER TABLE "Solicitations" ADD COLUMN     "createdIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "finishedIn" TIMESTAMP(3);
