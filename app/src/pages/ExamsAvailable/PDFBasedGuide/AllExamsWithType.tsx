import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useQuery } from "react-query";
import iconFeces from "@/../public/assets/Iconfeces.png";
import iconUrine from "@/../public/assets/iconUrine.png";
import { Input } from "@/components/ui/input";
import { KonvaComp } from "./KonvaComp";
import { RadiologyExams } from "./RadiologyExams";
import { FormProvider, useForm } from "react-hook-form";
import { IExams } from "@/@interfaces/IExams";
import { Button } from "@/components/ui/button";

export interface IFormSolicitation {
  base64Image: string;
  examsHematology: IExams[];
  examsBiochemistry: IExams[];
  examsUrine: IExams[];
  examsFeces: IExams[];
  examsMicrobiology: IExams[];
  examsDermatology: IExams[];
  examsHormones: IExams[];
  examsPathology: IExams[];
  examPathologySecondPart: IExams[];
  examsImmunology: IExams[];
  examsMolecularBiology: IExams[];
  examsCardiology: IExams[];
  examsUltrasound: IExams[];
}

export const AllExamsWithType = () => {
  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  const methods = useForm<IFormSolicitation>();

  const onSubmitForm = (values: IFormSolicitation) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitForm)}
        className="w-full grid grid-cols-3 gap-2 mt-5"
      >
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
                  value={examsHematology.name}
                  {...methods.register("examsHematology")}
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
                  value={examsBiochemistry.name}
                  {...methods.register("examsBiochemistry")}
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
                  value={examsUrine.name}
                  {...methods.register("examsUrine")}
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
            {examsWithType?.data.feces.map((examsFeces) => (
              <div
                key={examsFeces.id}
                className="flex items-start ml-2 w-full gap-1"
              >
                <TabGenericInput
                  id={examsFeces.id.toString()}
                  type="checkbox"
                  value={examsFeces.name}
                  {...methods.register("examsFeces")}
                />
                <label
                  htmlFor={examsFeces.id.toString()}
                  className="text-sm"
                  key={examsFeces.id}
                >
                  {examsFeces.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
            <p>MICROBIOLOGIA</p>
          </div>
          <div className="space-y-2">
            {examsWithType?.data.microbiology.map((examsMicrobiology) => (
              <div
                key={examsMicrobiology.id}
                className="flex items-start ml-2 w-full gap-1"
              >
                <TabGenericInput
                  id={examsMicrobiology.id.toString()}
                  type="checkbox"
                  value={examsMicrobiology.name}
                  {...methods.register("examsMicrobiology")}
                />
                <label
                  htmlFor={examsMicrobiology.id.toString()}
                  className="text-sm"
                  key={examsMicrobiology.id}
                >
                  {examsMicrobiology.name}
                </label>
              </div>
            ))}
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
                  value={examsDermatology.name}
                  {...methods.register("examsDermatology")}
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
                  value={examsHormones.name}
                  {...methods.register("examsHormones")}
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
                    value={examsPathology.name}
                    {...methods.register("examsPathology")}
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
                <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
              </div>
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">Região de coleta:</p>
                <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
              </div>
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">
                  Sob tratamento (Especificar):
                </p>
                <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
              </div>
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">HISTÓRICO / SUSPEITA / OBS:</p>
                <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
              </div>
              <div className="flex items-center w-full gap-2">
                <p className="whitespace-nowrap">Número de lesões:</p>
                <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5 pl-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="flex items-center w-full gap-2">
                  <p className="whitespace-nowrap">Tempo de evolução:</p>
                  <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
                </div>
                <div className="flex items-center w-full gap-2">
                  <p className="whitespace-nowrap">Tamanho:</p>
                  <Input className="bg-inherit border-b border-black rounded-none py-0 px-1" />
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
                        value={examPathologySecondPart.name}
                        {...methods.register("examPathologySecondPart")}
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
                    value={examsImmunology.name}
                    {...methods.register("examsImmunology")}
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
                      value={examsMolecularBiology.name}
                      {...methods.register("examsMolecularBiology")}
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
        <Button>Enviar Form</Button>
      </form>
    </FormProvider>
  );
};
