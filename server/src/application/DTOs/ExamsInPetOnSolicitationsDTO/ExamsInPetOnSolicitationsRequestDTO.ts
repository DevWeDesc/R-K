export interface IExamsWithMaterialInSolicitation {
  id: number;
  material: string;
}

export interface IExamsWithSamples {
  id: number;
  samples: string[];
}

export interface ExamsInPetOnSolicitationsRequestDTO {
  examsWithMaterial: IExamsWithMaterialInSolicitation[];
  examsWithSamples: IExamsWithSamples[];
  examsId: number[];
  solicitationsId: string;
}
