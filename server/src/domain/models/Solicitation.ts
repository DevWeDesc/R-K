export interface SolicitationModel {
  id: string;
  slug: string | null;
  createdIn: Date;
  isFinished: boolean;
  finishedIn: Date;
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
  exams: [
    {
      Exams: {
        name: string;
        preparing: string;
      };
    }
  ];
  petsId: number;
  pet: {
    id: number;
    name: string;
    specie: string;
    sex: string;
    dateOfBirth: string;
    customerId: number;
    customer: {
      id: number;
      name: string;
      email: string;
      phone: string;
      cpf: string;
    };
  };
  patologyInSolicitation: {
    id: string;
    solicitationId: string;
    numberOfInjuries: string;
    collectionregion: string;
    underTreatment?: string;
    historySuspicionNote?: string;
    evolutionTime?: string;
    size?: string;
  };
  referralWithSpecialist: {
    id: string;
    veterinarianId: number;
    solicitationId: string;
    historic?: string;
    specialist: {
      id: number;
      name: string;
      crmv: string;
      email: string;
      state: string;
      phone: string;
      usersLoginId: number;
    };
  };
}
