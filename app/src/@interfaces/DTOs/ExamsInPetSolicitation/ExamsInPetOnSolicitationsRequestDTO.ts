export interface IExamsWithMaterialInSolicitation {
  id: number;
  material: string;
}

export interface IExamsWithSamples {
  id: number;
  samples: string[];
}

export interface ExamsInPetOnSolicitationsRequestDTO {
  examsWithSamples: IExamsWithSamples[];
  examsWithMaterial: IExamsWithMaterialInSolicitation[];
  examsId: number[];
  solicitationsId: string;
}
