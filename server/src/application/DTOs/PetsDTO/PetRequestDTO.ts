import { SpecieEnum } from "@prisma/client";

export interface PetRequestDTO {
  name: string;
  specie: SpecieEnum;
  customerId: number;
}
