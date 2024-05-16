export interface IExamsPerPetOnSolicitations {
  id: number;
  examsId: number;
  solicitationsId: string;
  Exams: {
    id: number;
    name: string;
    value: number;
    preparing: string;
    deadline: string;
    groupsId: null | number;
  };
}
