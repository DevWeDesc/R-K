-- AlterTable
ALTER TABLE "RadiologySections" ALTER COLUMN "sedated" SET DEFAULT false,
ALTER COLUMN "clinicalSuspicion" SET DEFAULT '',
ALTER COLUMN "region" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "side" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "articulation" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "observation" SET DEFAULT '';
