import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";

export const AllExamsInSolicitation = (values: IFormSolicitation) => {
  const allExamsInSolicitation: number[] = [
    ...((Array.isArray(values.examsHematology) && values.examsHematology) ||
      []),
    ...((Array.isArray(values.examsBiochemistry) && values.examsBiochemistry) ||
      []),
    ...((Array.isArray(values.examsUrine) && values.examsUrine) || []),
    ...((Array.isArray(values.examsFeces) && values.examsFeces) || []),
    ...((Array.isArray(values.examsMicrobiology) && values.examsMicrobiology) ||
      []),
    ...((Array.isArray(values.examsDermatology) && values.examsDermatology) ||
      []),
    ...((Array.isArray(values.examsHormones) && values.examsHormones) || []),
    ...((Array.isArray(values.examsPathology) && values.examsPathology) || []),
    ...((Array.isArray(values.examPathologySecondPart) &&
      values.examPathologySecondPart) ||
      []),
    ...((Array.isArray(values.examsImmunology) && values.examsImmunology) ||
      []),
    ...((Array.isArray(values.examsMolecularBiology) &&
      values.examsMolecularBiology) ||
      []),
    ...((Array.isArray(values.examsCardiology) && values.examsCardiology) ||
      []),
    ...((Array.isArray(values.examsUltrasound) && values.examsUltrasound) ||
      []),
  ];

  return allExamsInSolicitation;
};
