import { SexEnum, SpecieEnum } from "@prisma/client";

export interface PetRequestDTO {
  name: string;
  specie: SpecieEnum;
  age: string;
  sex: SexEnum;
  customerId: number;
}
