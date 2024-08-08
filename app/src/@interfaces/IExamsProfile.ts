export interface IExamsProfile {
  id: string;
  name: string;
  examsInExamProfile: [
    {
      id: string;
      examsId: number;
      examsProfileId: string;
      Exams: {
        id: number;
        idOld: null;
        name: string;
        value: number;
        valueWithRate: null;
        isHighligth: false;
        preparing: null;
        deadline: string;
        specie: string;
        typeExam: string;
        groupsId: null;
      };
    }
  ];
}
