export interface IFormSolicitation {
  radiologySection: {
    Skull: { region: string; sedation: boolean; clinicalSuspicion: string };
    Skull_Dental_Arch: {
      regions: string[];
      sedation: true;
      clinicalSuspicion: string;
    };
    Members: { side: string[]; region: string[]; articulation: string[] };
    Pelvic_Limb: {
      side: string[];
      region: string[];
      articulation: string[];
      observation: string;
    };
    Chest: { region: string; clinicalSuspicion: string };
    Abdomen: { region: string; clinicalSuspicion: string };
    Spine: { region: string[] };
    Projections: { region: string };
    Cervical_Region: { region: string; clinicalSuspicion: string };
  };
  base64Image: string;
  observationGuide: string;
  specialistReferred: number | string;
  examsProfile: string[];
  examsHematology: number[];
  examsBiochemistry: number[];
  examsUrine: number[];
  examsFeces: number[];
  examsMicrobiology: number[];
  examsDermatology: number[];
  examsHormones: number[];
  examsPathology: number[];
  examPathologySecondPart: number[];
  examsImmunology: number[];
  examsMolecularBiology: number[];
  examsCardiology: number[];
  examsUltrasound: number[];
  allExamsRequest: number[];
}
