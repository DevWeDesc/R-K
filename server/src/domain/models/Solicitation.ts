export interface SolicitationModel {
  id: string;
  isFinished: boolean;
  createdIn: Date;
  finishedIn: Date | null;
  observation: string | null;
  veterinariansId: number;
  veterinarians: {
    id: number;
    name: string;
    crmv: string;
    email: string;
    state: string;
    phone: string;
    usersLoginId: number;
  };
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
