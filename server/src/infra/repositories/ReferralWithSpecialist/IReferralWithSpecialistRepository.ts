import { ReferralWithSpecialist } from "@prisma/client";

import { IGenericRepository } from "../IGenericRepository";
import { ReferralWithSpecialistRequestDTO } from "../../../application/DTOs/ReferralWithSpecialist/ReferralWithSpecialistRequestDTO";

export interface IReferralWithSpecialistRepository
  extends IGenericRepository<
    ReferralWithSpecialistRequestDTO,
    ReferralWithSpecialist
  > {}
