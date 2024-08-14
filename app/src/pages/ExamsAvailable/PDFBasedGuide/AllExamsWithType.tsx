import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useQuery } from "react-query";
import iconFeces from "@/../public/assets/Iconfeces.png";
import iconUrine from "@/../public/assets/iconUrine.png";
import imageBodyAnimal from "@/../public/assets/ImageBodyAnimal.png";
import { Input } from "@/components/ui/input";

export const AllExamsWithType = () => {
  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  return (
    <div className="w-full grid grid-cols-3 gap-2 mt-5">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>HEMATOLOGIA</p> <div className="size-4 bg-purple-800 rounded-sm" />
        </div>
        {examsWithType?.data.hematology.map((examsHematology) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput
              id={examsHematology.id.toString()}
              type="checkbox"
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
      <div className="col-span-2">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>BIOQUÍMICOS</p> <div className="size-4 bg-red-700 rounded-sm" />
        </div>
        {examsWithType?.data.biochemistry.map((examsBiochemistry) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput
              id={examsBiochemistry.id.toString()}
              type="checkbox"
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
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>URINA</p>{" "}
          <img src={iconUrine} className="size-4 bg-red-700 rounded-sm" />
        </div>
        {examsWithType?.data.urine.map((examsUrine) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput id={examsUrine.id.toString()} type="checkbox" />
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
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>FEZES</p> <img src={iconFeces} className="size-5 rounded-sm" />
        </div>
        {examsWithType?.data.feces.map((examsFeces) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput id={examsFeces.id.toString()} type="checkbox" />
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
      <div>
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>MICROBIOLOGIA</p>
        </div>
        {examsWithType?.data.microbiology.map((examsMicrobiology) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput
              id={examsMicrobiology.id.toString()}
              type="checkbox"
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
      <div className="col-span-3">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>DERMATOLOGIA</p>
        </div>
        {examsWithType?.data.dermatology.map((examsDermatology) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput
              id={examsDermatology.id.toString()}
              type="checkbox"
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
      <div className="col-span-3">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>HORMÔNIOS</p>
        </div>
        {examsWithType?.data.hormones.map((examsHormones) => (
          <div className="flex items-center ml-2 w-full gap-1">
            <TabGenericInput id={examsHormones.id.toString()} type="checkbox" />
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
      <div className="col-span-3 mb-5">
        <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
          <p>PATOLOGIA</p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2 grid grid-cols-2">
            {examsWithType?.data.pathology.map((examsPathology) => (
              <div className="flex items-center ml-2 w-full gap-1">
                <TabGenericInput
                  id={examsPathology.id.toString()}
                  type="checkbox"
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
            <img src={imageBodyAnimal} className="" alt="" />
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
              <p className="whitespace-nowrap">Sob tratamento (Especificar):</p>
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
            <div className="grid grid-cols-3">
              {[
                "Nódulo",
                "Placa",
                "Aderida",
                "Ulcerada",
                "Eritematosa",
                "Pigmentada",
                "Macia",
                "Firme",
                "Firme",
                "Flutuante",
                "Alopécica",
                "Pruriginosa",
              ].map((exam, index) => (
                <div className="flex items-center ml-2 w-full gap-1">
                  <TabGenericInput id={index.toString()} type="checkbox" />
                  <label
                    htmlFor={index.toString()}
                    className="text-sm"
                    key={index}
                  >
                    {exam}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
            <p>IMUNOLOGIA</p>
          </div>
          {examsWithType?.data.immunology.map((examsImmunology) => (
            <div className="flex items-center ml-2 w-full gap-1">
              <TabGenericInput
                id={examsImmunology.id.toString()}
                type="checkbox"
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
        <div className="col-span-1">
          <div className="flex items-center gap-2 bg-grayTypeExams mb-2 px-2 py-1 font-medium text-sm rounded-lg">
            <p>BIOLOGIA MOLECULAR (PCR)</p>
          </div>
          {examsWithType?.data.molecularBiology.map((examsMolecularBiology) => (
            <div className="flex items-center ml-2 w-full gap-1">
              <TabGenericInput
                id={examsMolecularBiology.id.toString()}
                type="checkbox"
              />
              <label
                htmlFor={examsMolecularBiology.id.toString()}
                className="text-sm"
                key={examsMolecularBiology.id}
              >
                {examsMolecularBiology.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};