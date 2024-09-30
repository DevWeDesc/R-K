import { CreateRadiologySectionControllerRequestDTO } from "@/@interfaces/DTOs/Solicitations/RadiologySection/CreateRadiologySection";
import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TypeOfRadiologySectionEnum } from "@/enums/TypeOfRadiologySectionEnum";

export const CreateRadiologySectionsDataRequest = (
  values: IFormSolicitation,
  id: string
): CreateRadiologySectionControllerRequestDTO => {
  const createRadiologySectionsDataRequest: CreateRadiologySectionControllerRequestDTO =
    {
      data: [
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Skull,
          region: [values.radiologySection.Skull.region],
          sedated: values.radiologySection.Skull.sedation as boolean,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Skull_Dental_Arch,
          region: values.radiologySection.Skull_Dental_Arch.regions,
          sedated: values.radiologySection.Skull_Dental_Arch
            .sedation as boolean,
        },
        {
          solicitationId: id,
          side: values.radiologySection.Members.side,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Members,
          articulation: values.radiologySection.Members.articulation,
          region: values.radiologySection.Members.region,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Pelvic_Limb,
          articulation: values.radiologySection.Pelvic_Limb.articulation,
          side: values.radiologySection.Pelvic_Limb.side,
          region: values.radiologySection.Pelvic_Limb.region,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Chest,
          region: [values.radiologySection.Chest.region],
          clinicalSuspicion: values.radiologySection.Chest.clinicalSuspicion,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Abdomen,
          region: [values.radiologySection.Abdomen.region],
          clinicalSuspicion: values.radiologySection.Abdomen.clinicalSuspicion,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Spine,
          region: values.radiologySection.Spine.region,
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Projections,
          region: [values.radiologySection.Projections.region],
        },
        {
          solicitationId: id,
          typeOfRadiologySection: TypeOfRadiologySectionEnum.Cervical_Region,
          region: [values.radiologySection.Cervical_Region.region],
          clinicalSuspicion:
            values.radiologySection.Cervical_Region.clinicalSuspicion,
        },
      ],
    };

  return createRadiologySectionsDataRequest;
};
