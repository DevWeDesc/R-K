import { TypeOfRadiologySectionEnum } from "@/enums/TypeOfRadiologySectionEnum";

export interface CreateRadiologySectionRequestDTO {
  solicitationId: string;
  typeOfRadiologySection: TypeOfRadiologySectionEnum;
  sedated?: boolean | null | undefined;
  clinicalSuspicion?: string;
  region: string[];
  side?: string[];
  articulation?: string[];
  observation?: string;
}

export interface CreateRadiologySectionControllerRequestDTO {
  data: CreateRadiologySectionRequestDTO[];
}
