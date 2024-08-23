-- AlterEnum
ALTER TYPE "ExamTypeEnum" ADD VALUE 'PATOLOGIA_SEGUNDA_PARTE';

-- AlterTable
ALTER TABLE "Solicitations" ADD COLUMN     "bodyAnimalImage" TEXT DEFAULT '';
