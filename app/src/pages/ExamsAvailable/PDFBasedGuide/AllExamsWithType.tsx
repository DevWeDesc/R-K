import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useQuery } from "react-query";
import iconFeces from "@/../public/assets/Iconfeces.png";
import iconUrine from "@/../public/assets/iconUrine.png";
import { Input } from "@/components/ui/input";
import { KonvaComp } from "./KonvaComp";
import { RadiologyExams } from "./RadiologyExams";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { useParams } from "react-router-dom";
import { ModalGeneric } from "@/components/ModalGeneric";
import { useState } from "react";
import { FormGuide } from "../GuidePreview/FormGuide";
import { SolicitationById } from "@/services/Solicitations/SolicitationById";

export const AllExamsWithType = () => {
  const { id } = useParams<string>();

  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  const { data: solicitation } = useQuery({
    queryKey: ["Solicitation", id],
    queryFn: () => SolicitationById(id ? id : ""),
  });

  const { register, getValues, watch } = useFormContext<IFormSolicitation>();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full grid grid-cols-3 gap-2 mt-5">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>
            HEMATOLOGIA <span className="brightness-50 contrast-150">🟪</span>
          </p>
        </div>
        <div className="space-y-2">
          {examsWithType?.data.hematology.map((examsHematology) => (
            <div
              key={examsHematology.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                id={examsHematology.id.toString()}
                type="checkbox"
                value={examsHematology.id}
                {...register("examsHematology")}
              />
              <label
                htmlFor={examsHematology.id.toString()}
                className="text-sm"
                key={examsHematology.id}
              >
                {examsHematology.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>
            BIOQUÍMICOS <span className="brightness-75">🟥</span>
          </p>
        </div>
        <div className="grid grid-cols-3 ml-2 w-full gap-2">
          {examsWithType?.data.biochemistry.map((examsBiochemistry) => (
            <div
              key={examsBiochemistry.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                id={examsBiochemistry.id.toString()}
                type="checkbox"
                value={examsBiochemistry.id}
                {...register("examsBiochemistry")}
              />
              <label
                htmlFor={examsBiochemistry.id.toString()}
                className="text-sm"
                key={examsBiochemistry.id}
              >
                {examsBiochemistry.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>URINA</p>{" "}
          <img src={iconUrine} className="size-4 bg-red-700 rounded-sm" />
        </div>
        <div className="space-y-2">
          {examsWithType?.data.urine.map((examsUrine) => (
            <div
              key={examsUrine.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                id={examsUrine.id.toString()}
                type="checkbox"
                value={examsUrine.id}
                {...register("examsUrine")}
              />
              <label
                htmlFor={examsUrine.id.toString()}
                className="text-sm"
                key={examsUrine.id}
              >
                {examsUrine.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>FEZES</p> <img src={iconFeces} className="size-5 rounded-sm" />
        </div>
        <div className="space-y-2">
          {examsWithType?.data.feces.map((examsFeces) => {
            const sampleIsDisponible =
              Array.isArray(watch("examsFeces")) &&
              watch("examsFeces").find((exams) => exams == examsFeces.id);
            return (
              <div key={examsFeces.id} className="ml-2">
                <div
                  key={examsFeces.id}
                  className="flex items-start w-full gap-1"
                >
                  <TabGenericInput
                    id={examsFeces.id.toString()}
                    type="checkbox"
                    value={examsFeces.id}
                    {...register("examsFeces")}
                  />
                  <label
                    htmlFor={examsFeces.id.toString()}
                    className="text-sm"
                    key={examsFeces.id}
                  >
                    {examsFeces.name}
                  </label>
                </div>
                {examsFeces.name === "Parasitológico de Fezes (3 Amostra)" && (
                  <div
                    className={`flex gap-1  ${
                      !sampleIsDisponible && "text-black/65"
                    }`}
                  >
                    <span className="text-sm font-medium">1º</span>
                    <Input
                      disabled={!sampleIsDisponible as boolean}
                      {...register(
                        `samplesForExamsFeces.${examsFeces.id}.${1}`
                      )}
                      className="bg-inherit border-b border-black rounded-none py-0 px-1"
                    />
                    <span className="text-sm font-medium">2º</span>
                    <Input
                      disabled={!sampleIsDisponible as boolean}
                      {...register(
                        `samplesForExamsFeces.${examsFeces.id}.${2}`
                      )}
                      className="bg-inherit border-b border-black rounded-none py-0 px-1"
                    />
                    <span className="text-sm font-medium">3º</span>
                    <Input
                      disabled={!sampleIsDisponible as boolean}
                      {...register(
                        `samplesForExamsFeces.${examsFeces.id}.${3}`
                      )}
                      className="bg-inherit border-b border-black rounded-none py-0 px-1"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>MICROBIOLOGIA</p>
        </div>
        <div className="space-y-2">
          {examsWithType?.data.microbiology.map((examsMicrobiology) => {
            const materialIsDisponible =
              Array.isArray(watch("examsMicrobiology")) &&
              watch("examsMicrobiology").find(
                (exams) => exams == examsMicrobiology.id
              );

            return (
              <div key={examsMicrobiology.id} className="ml-2">
                <div
                  key={examsMicrobiology.id}
                  className="flex items-start w-full gap-1"
                >
                  <TabGenericInput
                    id={examsMicrobiology.id.toString()}
                    type="checkbox"
                    value={examsMicrobiology.id}
                    {...register("examsMicrobiology")}
                  />
                  <label
                    htmlFor={examsMicrobiology.id.toString()}
                    className="text-sm"
                    key={examsMicrobiology.id}
                  >
                    {examsMicrobiology.name}
                  </label>
                </div>

                <div className="flex gap-1">
                  <span
                    className={`text-sm font-medium ${
                      !materialIsDisponible && "text-black/65"
                    }`}
                  >
                    Material:
                  </span>
                  <Input
                    {...register(
                      `materialForExamsMicrobiology.${examsMicrobiology.id}`
                    )}
                    disabled={!materialIsDisponible as boolean}
                    className="bg-inherit border-b border-black rounded-none py-0 px-1"
                    placeholder="Informe o material"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>DERMATOLOGIA</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {examsWithType?.data.dermatology.map((examsDermatology) => (
            <div
              key={examsDermatology.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                id={examsDermatology.id.toString()}
                type="checkbox"
                value={examsDermatology.id}
                {...register("examsDermatology")}
              />
              <label
                htmlFor={examsDermatology.id.toString()}
                className="text-sm"
                key={examsDermatology.id}
              >
                {examsDermatology.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>HORMÔNIOS</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {examsWithType?.data.hormones.map((examsHormones) => (
            <div
              key={examsHormones.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                id={examsHormones.id.toString()}
                type="checkbox"
                value={examsHormones.id}
                {...register("examsHormones")}
              />
              <label
                htmlFor={examsHormones.id.toString()}
                className="text-sm"
                key={examsHormones.id}
              >
                {examsHormones.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 mb-5">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>PATOLOGIA</p>
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-2 grid grid-cols-2 place-items-start">
            {examsWithType?.data.pathology.map((examsPathology) => (
              <div
                key={examsPathology.id}
                className="flex items-start ml-2 w-full gap-1"
              >
                <TabGenericInput
                  id={examsPathology.id.toString()}
                  type="checkbox"
                  value={examsPathology.id}
                  {...register("examsPathology")}
                />
                <label
                  htmlFor={examsPathology.id.toString()}
                  className="text-sm"
                  key={examsPathology.id}
                >
                  {examsPathology.name}
                </label>
              </div>
            ))}
            <div className="flex items-center w-full gap-2">
              <p className="whitespace-nowrap">Outros:</p>
              <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
            </div>
          </div>
          <div>
            <KonvaComp />
          </div>
          <div className="col-span-2 flex flex-col gap-2 pl-2 text-sm">
            <div className="flex items-center w-full gap-2">
              <p className="whitespace-nowrap">Número de lesões:</p>
              <Input
                {...register("patologySection.numberOfInjuries")}
                className="bg-inherit border-b border-black rounded-none py-0 px-1"
              />
            </div>
            <div className="flex items-center w-full gap-2">
              <p className="whitespace-nowrap">Região de coleta:</p>
              <Input
                {...register("patologySection.collectionregion")}
                className="bg-inherit border-b border-black rounded-none py-0 px-1"
              />
            </div>
            <div className="flex items-center w-full gap-2">
              <p className="whitespace-nowrap">Sob tratamento (Especificar):</p>
              <Input
                {...register("patologySection.underTreatment")}
                className="bg-inherit border-b border-black rounded-none py-0 px-1"
              />
            </div>
            <div className="flex items-center w-full gap-2">
              <p className="whitespace-nowrap">HISTÓRICO / SUSPEITA / OBS:</p>
              <Input
                {...register("patologySection.historySuspicionNote")}
                className="bg-inherit border-b border-black rounded-none py-0 px-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5 pl-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">Tempo de evolução:</p>
                <Input
                  {...register("patologySection.evolutionTime")}
                  className="bg-inherit border-b border-black rounded-none py-0 px-1"
                />
              </div>
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">Tamanho:</p>
                <Input
                  {...register("patologySection.size")}
                  className="bg-inherit border-b border-black rounded-none py-0 px-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {examsWithType?.data.pathologySecondPart.map(
                (examPathologySecondPart) => (
                  <div
                    key={examPathologySecondPart.id}
                    className="flex items-start ml-2 w-full gap-1"
                  >
                    <TabGenericInput
                      id={examPathologySecondPart.id.toString()}
                      type="checkbox"
                      value={examPathologySecondPart.id}
                      {...register("examPathologySecondPart")}
                    />
                    <label
                      htmlFor={examPathologySecondPart.id.toString()}
                      className="text-sm"
                      key={examPathologySecondPart.id}
                    >
                      {examPathologySecondPart.name}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
            <p>IMUNOLOGIA</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {examsWithType?.data.immunology.map((examsImmunology) => (
              <div
                key={examsImmunology.id}
                className="flex items-start ml-2 w-full gap-1 brightness-75"
              >
                <TabGenericInput
                  id={examsImmunology.id.toString()}
                  type="checkbox"
                  value={examsImmunology.id}
                  {...register("examsImmunology")}
                />
                <label
                  htmlFor={examsImmunology.id.toString()}
                  className="text-sm"
                  key={examsImmunology.id}
                >
                  {examsImmunology.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
            <p>BIOLOGIA MOLECULAR (PCR)</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {examsWithType?.data.molecularBiology.map(
              (examsMolecularBiology) => (
                <div
                  key={examsMolecularBiology.id}
                  className="flex items-start ml-2 w-full gap-1"
                >
                  <TabGenericInput
                    id={examsMolecularBiology.id.toString()}
                    type="checkbox"
                    value={examsMolecularBiology.id}
                    {...register("examsMolecularBiology")}
                  />
                  <label
                    htmlFor={examsMolecularBiology.id.toString()}
                    className="text-sm"
                    key={examsMolecularBiology.id}
                  >
                    {examsMolecularBiology.name}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
        <RadiologyExams />
      </div>
      <ModalGeneric
        textDescription="Finalização da guia"
        textTitle="Finalizar Guia"
        openModal={openModal}
        setModalOpen={() => setOpenModal(false)}
      >
        <FormGuide
          customerInformations={
            solicitation?.data.solicitationsDetails.pet?.customer
          }
          emailVeterinarian={
            solicitation?.data.solicitationsDetails.veterinarians.email
          }
          observation={getValues("observationGuide")}
          closeModal={() => setOpenModal(false)}
        />
      </ModalGeneric>
      <Button type="submit" onClick={() => setOpenModal(true)}>
        Enviar Form
      </Button>
    </div>
  );
};
