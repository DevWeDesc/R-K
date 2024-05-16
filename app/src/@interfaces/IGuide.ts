import { IExamsPerPetOnSolicitations } from "./IExamsPerPetOnSolicitations";
import { IPets } from "./IPets";
import { IVeterinarians } from "./IVeterinarians";

export interface IGuide {
  solicitationsDetails: {
    id: string;
    isFinished: boolean;
    createdIn: string;
    finishedIn: null | Date;
    observation: null | string;
    veterinariansId: 1;
    petsId: 1;
    pet: IPets;
    veterinarians: IVeterinarians;
    exams: IExamsPerPetOnSolicitations[];
  };
  total: string;
}
