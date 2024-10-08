import { ExamsInPetOnSolicitationsRequestDTO } from "@/@interfaces/DTOs/ExamsInPetSolicitation/ExamsInPetOnSolicitationsRequestDTO";
import { CreateManyExamsProfileInSolicitationRequestDTO } from "@/@interfaces/DTOs/ExamsProfileInSolicitation/CreateManyExamsProfileInSolicitationRequestDTO";
import { FinalizeSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/FinalizeSolicitaton/FinalizeSolicitationRequestDTO";
import { PatologyInSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/PatologyInSolicitation/PatologyInSolicitationRequestDTO";
import { CreateRadiologyInSolicitationRequestDTO } from "@/@interfaces/DTOs/Solicitations/RadiologyInSolicitation/CreateRadiologyInSolicitationRequestDTO";
import { CreateRadiologySectionControllerRequestDTO } from "@/@interfaces/DTOs/Solicitations/RadiologySection/CreateRadiologySection";
import { ReferralWithSpecialistRequestDTO } from "@/@interfaces/DTOs/Solicitations/ReferralWithSpecialist/ReferralWithSpecialistRequestDTO";
import { ICustomer } from "@/@interfaces/ICustomer";
import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateExamsInPetSolicitations } from "@/services/ExamsInPetOnSolicitations/CreateExamsInPetSolicitations";
import { CreateExamsProfileInSolicitationsService } from "@/services/ExamsProfileInSolicitations/CreateExamsProfileInSolicitations.Service";
import { FinalizeSolicitation } from "@/services/Solicitations/FInalizeSolicitation";
import { CreatePatologyInSolicitation } from "@/services/Solicitations/Patology/CreatePatologyInSolicitation";
import { CreateRadiologyInSolicitation } from "@/services/Solicitations/Radiology/CreateRadiologyInSolicitation";
import { CreateRadiologySectionsInRadiologyOfSolicitation } from "@/services/Solicitations/Radiology/RadiologySection/CreateRadiologySectionsInRadiologyOfSolicitation";
import { CreateReferralWithSpecialist } from "@/services/Solicitations/ReferralWIthSpecialist/CreateReferralWithSpecialist";
import { AllExamsInSolicitation } from "@/utils/FormatDataRequestForms/AllExamsInSolicitation";
import { CreateRadiologySectionsDataRequest } from "@/utils/FormatDataRequestForms/CreateRadiologySectionsDataRequest";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface IFormGuide {
  customerInformations: ICustomer | undefined;
  emailVeterinarian: string | undefined;
  observation: string;
  closeModal: () => void;
}

export const FormGuide = ({
  customerInformations,
  emailVeterinarian,
  observation,
  closeModal,
}: IFormGuide) => {
  // const { register, handleSubmit } = useForm<IFormFinalizationGuide>();
  const { id } = useParams();
  const emailRK = "rkoficial@gmail.com";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // const form = useFormContext<IFormSolicitation>();

  const { register, handleSubmit, getValues } =
    useFormContext<IFormSolicitation>();

  const onSubmit = async (values: IFormSolicitation) => {
    setIsLoading(true);

    const createRadiologySectionsDataRequest =
      CreateRadiologySectionsDataRequest(values, id ? id : "");

    const dataRequestExamsInSolicitation: ExamsInPetOnSolicitationsRequestDTO =
      {
        examsId: [],
        examsWithSamples: [],
        examsWithMaterial: [],
        solicitationsId: id ? id : "",
      };

    const dataRequestExamsProfileInSolicitation: CreateManyExamsProfileInSolicitationRequestDTO =
      { solicitationsId: id ? id : "", examProfileId: [] };

    const createRadiologyRequestBody: CreateRadiologyInSolicitationRequestDTO =
      {
        solicitationId: id ? id : "",
      };

    const createPatologyInSolicitationRequest: PatologyInSolicitationRequestDTO =
      {
        solicitationId: id ? id : "",
        collectionregion: values.patologySection.collectionregion,
        evolutionTime: values.patologySection.evolutionTime,
        historySuspicionNote: values.patologySection.historySuspicionNote,
        numberOfInjuries: values.patologySection.numberOfInjuries,
        size: values.patologySection.size,
        underTreatment: values.patologySection.underTreatment,
      };

    const createReferralWithSpecialist: ReferralWithSpecialistRequestDTO = {
      solicitationId: id ? id : "",
      veterinarianId: parseInt(
        values.referralWithSpecialistSection.veterinarianId?.toString()
      ),
      historic: values.referralWithSpecialistSection.historic,
    };

    const dataRequestFinalizeSolicitation: FinalizeSolicitationRequestDTO = {
      emailVeterinarian: values.emailVeterinarian,
      isFinished: true,
      observation: observation,
      bodyAnimalImage: getValues("base64Image"),
    };

    const examsWithMaterial = Array.from(
      { length: values.materialForExamsMicrobiology.length },
      (_, index) => ({
        id: index,
        material: values.materialForExamsMicrobiology[index] ?? null,
      })
    ).filter(
      (item) =>
        item.material !== null &&
        Array.isArray(values.examsMicrobiology) &&
        values.examsMicrobiology.find((exam) => exam == item.id)
    );

    for (const examWithMaterial of examsWithMaterial) {
      const { id, material } = examWithMaterial;
      dataRequestExamsInSolicitation.examsWithMaterial.push({ id, material });
    }

    const examsWithSamples = Array.from(
      { length: values.samplesForExamsFeces.length },
      (_, index) => ({
        id: index,
        sample: values.samplesForExamsFeces[index] ?? null,
      })
    ).filter(
      (item) =>
        item.sample !== null &&
        Array.isArray(values.examsFeces) &&
        values.examsFeces.find((exam) => exam == item.id)
    );

    for (const examWithSample of examsWithSamples) {
      const { id, sample } = examWithSample;
      const sampleFiltered = [];

      for (const sampleInExam of sample)
        if (sampleInExam != undefined && sampleInExam != "")
          sampleFiltered.push(sampleInExam);

      dataRequestExamsInSolicitation.examsWithSamples.push({
        id,
        samples: sampleFiltered,
      });
    }

    const profileExams = values.examsProfile;
    const allExamsInSolicitation = AllExamsInSolicitation(values);

    if (profileExams.length > 0)
      dataRequestExamsProfileInSolicitation.examProfileId.push(...profileExams);

    if (allExamsInSolicitation.length > 0)
      dataRequestExamsInSolicitation.examsId.push(...allExamsInSolicitation);

    const validateRequestForCreateExamsProfileInSolicitationsService =
      Array.isArray(dataRequestExamsProfileInSolicitation.examProfileId) &&
      dataRequestExamsProfileInSolicitation.examProfileId.length > 0;

    const validateRequestForCreateExamsInPetSolicitations =
      Array.isArray(dataRequestExamsInSolicitation.examsId) &&
      dataRequestExamsInSolicitation.examsId.length > 0;

    const createRadiologySectionsDataRequestFiltered: CreateRadiologySectionControllerRequestDTO =
      {
        data: createRadiologySectionsDataRequest.data.filter(
          (i) => i.region && i.region != undefined && i.region[0] != ""
        ),
      };

    const validateRequestForCreateRadiologySectionsInRadiologyOfSolicitation =
      Array.isArray(createRadiologySectionsDataRequestFiltered.data) &&
      createRadiologySectionsDataRequestFiltered.data.length > 0;

    const filteredPatologyInSolicitationRequest = Object.fromEntries(
      Object.entries(createPatologyInSolicitationRequest).filter(
        ([_, value]) => value !== "" && value !== undefined && value != id
      )
    );

    const validateRequestForCreatePatologyInSolicitation =
      Object.keys(filteredPatologyInSolicitationRequest).length > 0;

    console.log(dataRequestExamsInSolicitation);
    await Promise.any([
      validateRequestForCreateExamsProfileInSolicitationsService &&
        CreateExamsProfileInSolicitationsService(
          dataRequestExamsProfileInSolicitation
        ).catch((err) => console.log(err)),

      createReferralWithSpecialist.veterinarianId &&
        CreateReferralWithSpecialist(createReferralWithSpecialist).catch(
          (err) => console.log(err)
        ),

      validateRequestForCreateExamsInPetSolicitations &&
        CreateExamsInPetSolicitations(dataRequestExamsInSolicitation).catch(
          (err) => console.log(err)
        ),

      CreateRadiologyInSolicitation(createRadiologyRequestBody).catch((err) =>
        console.log(err)
      ),

      validateRequestForCreateRadiologySectionsInRadiologyOfSolicitation &&
        CreateRadiologySectionsInRadiologyOfSolicitation(
          createRadiologySectionsDataRequestFiltered
        ).catch((err) => console.log(err)),

      validateRequestForCreatePatologyInSolicitation &&
        CreatePatologyInSolicitation(createPatologyInSolicitationRequest).catch(
          (err) => console.log(err)
        ),

      id && FinalizeSolicitation(id, dataRequestFinalizeSolicitation),
    ])
      .then(() => {
        setIsLoading(false);
        navigate("/home");
        toast.success("Guia gerada com sucesso!");
      })
      .catch((err) => {
        console.error("Todas requisições falharam:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailClient" className="text-sm">
          E-mail e telefone do cliente
          <br />
          <span className="text-xs font-bold text-black/70">
            {customerInformations?.email}
          </span>
          <br />
          <span className="text-xs font-bold text-black/70">
            {customerInformations?.phone}
          </span>
        </label>
        <Input
          defaultChecked
          disabled
          id="emailClient"
          className="hover:shadow-none accent-zinc-300 cursor-no-drop"
          type="checkbox"
          value={customerInformations?.email}
        />
      </div>

      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailRK" className="text-sm">
          E-mail da RK
          <br />
          <span className="text-xs font-bold text-black/70">{emailRK}</span>
        </label>
        <Input
          defaultChecked
          disabled
          id="emailRK"
          className="hover:shadow-none accent-zinc-300 cursor-no-drop"
          type="checkbox"
          value={emailRK}
        />
      </div>

      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailVeterinarian" className="text-sm">
          E-mail do Veterinário <br />
          <span className="text-xs text-black/70 font-bold">
            {emailVeterinarian}
          </span>
        </label>
        <Input
          id="emailVeterinarian"
          {...register("emailVeterinarian")}
          className="hover:shadow-none"
          type="checkbox"
          value={emailVeterinarian}
        />
      </div>

      <div className="col-span-2 flex justify-end gap-2 mt-4">
        <Button onClick={closeModal} variant="outline" className="px-6 text-sm">
          Cancelar
        </Button>
        {isLoading ? (
          <Button
            type="button"
            variant="secondary"
            className="px-6 text-sm rounded-full cursor-wait"
          >
            <ImSpinner8 className="text-xl animate-spin mr-2" />
            Carregando
          </Button>
        ) : (
          <Button className="px-6 text-sm">Confirmar</Button>
        )}
      </div>
    </form>
  );
};
