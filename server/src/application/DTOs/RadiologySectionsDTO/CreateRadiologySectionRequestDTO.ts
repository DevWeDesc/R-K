import { TypeOfRadiologySection } from "@prisma/client";

export interface CreateRadiologySectionRequestDTO {
  radiologyInSolicitationId?: string;
  typeOfRadiologySection: TypeOfRadiologySection;
  sedated?: boolean | null | undefined;
  clinicalSuspicion?: string;
  region: string[];
  side: string[];
  articulation: string[];
  observation?: string;
}
