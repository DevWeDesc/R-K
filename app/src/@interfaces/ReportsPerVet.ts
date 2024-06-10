export interface IReportPerVet {
  id: number;
  name: string;
  crmv: string;
  email: string;
  state: string;
  phone: string;
  usersLoginId: number;
  solicitations: [
    {
      id: string;
      slug: string;
      isFinished: true;
      createdIn: string;
      finishedIn: string;
      observation: string;
      veterinariansId: number;
      petsId: number;
      pet: {
        id: number;
        name: string;
        age: string;
        sex: string;
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
  ];
  _count: {
    solicitations: number;
  };
}
