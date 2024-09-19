import { TypeOfRadiologySectionEnum } from "../../../domain/enums/TypeOfRadiologySectionEnum";

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

export interface CreateRadiologySectionRequestControllerDTO {
  data: CreateRadiologySectionRequestDTO[];
}
