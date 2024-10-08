import { SexEnum, SpecieEnum } from "@prisma/client";

export interface PetRequestDTO {
  name: string;
  specie: SpecieEnum;
  dateOfBirth: string;
  sex: SexEnum;
  customerId: number;
}
