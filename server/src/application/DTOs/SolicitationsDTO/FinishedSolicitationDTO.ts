export interface FinishedSolicitationDTO {
  isFinished: boolean;
  finishedIn: Date;
  slug: string;
  observation?: string;
  bodyAnimalImage?: string;
}
