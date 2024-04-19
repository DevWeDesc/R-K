export interface SolicitationModel {
  id: string;
  isFinished: boolean;
  createdIn: Date;
  finishedIn: Date | null;
  observation: string | null;
  veterinariansId: number;
  petsId: number;
  pet: {
    id: number;
    name: string;
    specie: string;
    customerId: number;
    customer: {
      id: number;
      name: string;
      email: string;
      phone: string;
    };
  };
}
