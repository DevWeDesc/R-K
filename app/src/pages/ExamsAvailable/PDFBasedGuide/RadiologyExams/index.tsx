import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";

export const RadiologyExams = () => {
  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  const { register } = useFormContext<IFormSolicitation>();

  return (
    <div className="col-span-2 bg-red-100/50">
      <div className="flex items-center gap-2 bg-slate-800 mb-2 px-2 py-1 font-medium text-sm rounded-lg">
        <p className="font-medium text-white text-base">RADIOLOGIA</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 text-sm px-6">
          <div className="flex items-center border-b border-black">
            <p className="font-medium">CRÂNIO</p>{" "}
            <Input className="bg-inherit py-0" />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Região: </p>{" "}
            <Input className="bg-inherit py-0 border-b border-black rounded-none" />
          </div>
          <div className="flex items-start w-full gap-1 ">
            <TabGenericInput id={"sedação"} type="checkbox" />
            <label
              htmlFor={"sedação"}
              className="text-sm font-medium"
              key={"sedação"}
            >
              Sedação
            </label>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-nowrap font-medium">Suspeita clínica: </p>{" "}
            <Input className="bg-inherit py-0 border-b border-black rounded-none" />
          </div>
          <p className="font-medium">
            Crânio - Arcada Dentária (necessário sedação)
          </p>
          <div className="grid grid-cols-6">
            <div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Superior
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Direita
                </label>
              </div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Esquerda
                </label>
              </div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Incisivos
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Inferior
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Direita
                </label>
              </div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Esquerda
                </label>
              </div>
              <div className="flex items-start w-full gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Incisivos
                </label>
              </div>
            </div>
            <div className="col-span-2 ml-4">
              <textarea
                name=""
                id=""
                placeholder="Suspeita clínica"
                className="p-1 w-full h-full max-h-16 bg-transparent border border-black"
              />
            </div>
          </div>
          <p className="border-b border-black font-medium">MEMBROS</p>
          <div className="flex items-center gap-2">
            <p className="font-medium">Membro Torácico</p>
            <div className="flex items-start gap-1">
              <TabGenericInput id={"sedação"} type="checkbox" />
              <label htmlFor={"sedação"} className="text-sm" key={"sedação"}>
                Direito
              </label>
            </div>
            <div className="flex items-start gap-1">
              <TabGenericInput id={"sedação"} type="checkbox" />
              <label htmlFor={"sedação"} className="text-sm" key={"sedação"}>
                Esquerdo
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Região: </p>
            <div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Escápula
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Úmero
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Rádio/ulna
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Carpos, metacarpos e falanges.
                </label>
              </div>
            </div>
            <p className="font-medium">Articulação: </p>
            <div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Escapuloumeral
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Umerorradioulnar
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Cárpica / Carpometacárpica / Metacarpofalangeana /
                  Interfalangeana
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-4">
              <p className="font-medium">Membro Pélvico</p>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Direito
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Esquerdo
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Obs:</span>
              <Input className="py-0 bg-inherit rounded-none border-b border-black" />
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Região: </p>
            <div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Fêmur
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Tíbia / Fíbula
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Tarsos, metatarsos e falanges.
                </label>
              </div>
            </div>
            <p className="font-medium">Articulação: </p>
            <div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Coxofemoral
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Femurotibiopatelar
                </label>
              </div>
              <div className="flex items-start gap-1">
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="text-sm font-medium"
                  key={"sedação"}
                >
                  Társica / Tarsometatársica / Metatarsofalangeana /
                  Interfalangeana
                </label>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Obs:</span>
                <Input className="py-0 bg-inherit rounded-none border-b border-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm mr-6">
          <div className="border-b border-black flex items-center">
            <div className="flex items-start gap-1 pb-2">
              <TabGenericInput id={"sedação"} type="checkbox" />
              <label
                htmlFor={"sedação"}
                className="font-medium"
                key={"sedação"}
              >
                TÓRAX
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium">
              Suspeita clínica:
            </label>
            <Input className="px-1 py-1 bg-inherit border-b border-black rounded-none" />
          </div>
          <div className="border-b border-black flex items-center">
            <div className="flex items-start gap-1 pb-2">
              <TabGenericInput id={"sedação"} type="checkbox" />
              <label
                htmlFor={"sedação"}
                className="font-medium"
                key={"sedação"}
              >
                AMDÔMEN
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium">
              Suspeita clínica:
            </label>
            <Input className="px-1 py-1 bg-inherit border-b border-black rounded-none" />
          </div>
          <div className="border-b border-black flex items-center">
            <div className="flex items-start gap-1 pb-2">
              <p className="font-medium" key={"sedação"}>
                COLUNA VERTEBRAL
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-black pb-2">
            {[
              "Cervical",
              "Coccigea/Caudal ",
              "Cervicotorácica",
              "Toda ",
              "Torácica",
              "Toracolombar",
              "Lombar",
              "Lombossacral",
            ].map((exam, index) => (
              <div key={index} className="flex items-start gap-1 pb-2">
                <TabGenericInput id={exam} type="checkbox" />
                <label htmlFor={exam} className="font-medium" key={exam}>
                  {exam}
                </label>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-1 pb-2">
            <p className="font-medium">PROJEÇÕES: </p>
            <TabGenericInput id={"sedação"} type="checkbox" />
            <label htmlFor={"sedação"} className="font-medium" key={"sedação"}>
              A critério do radiologista.
            </label>
          </div>
          <div className="space-y-2">
            <p className="font-medium border-b border-black">REGIÃO CERVICAL</p>
            <div className="flex items-center">
              <div className="flex items-start gap-1 pb-2">
                <p className="font-medium">Região Cervical: </p>
                <TabGenericInput id={"sedação"} type="checkbox" />
                <label
                  htmlFor={"sedação"}
                  className="font-medium"
                  key={"sedação"}
                >
                  Partes Moles.
                </label>
              </div>
            </div>
            <div className="flex items-start gap-1 pb-2">
              <label
                htmlFor={"sedação"}
                className="font-medium text-nowrap"
                key={"sedação"}
              >
                Suspeita clínica:
              </label>
              <Input className="py-0 px-2 border-b border-black bg-inherit rounded-none" />
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full grid grid-cols-6 gap-2 text-sm">
          <div className="col-span-2">
            <p className="pl-4 uppercase bg-slate-800 text-lg font-medium text-white rounded-lg">
              Cardiologia
            </p>
            <div className="pl-6 py-3 space-y-2">
              {examsWithType?.data.cardiology.map((exam, index) => (
                <div key={index} className="flex items-start gap-1 pb-2">
                  <TabGenericInput
                    value={exam.id}
                    {...register("examsCardiology")}
                    id={exam.id.toString()}
                    type="checkbox"
                  />
                  <label
                    htmlFor={exam.id.toString()}
                    className="font-medium"
                    key={exam.id.toString()}
                  >
                    {exam.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 ">
            <p className="pl-4 uppercase bg-slate-800 text-lg font-medium text-white rounded-lg">
              Ultrassonografia
            </p>
            <div className="grid grid-cols-3 pl-6 py-3 space-y-1 gap-x-5">
              {examsWithType?.data.ultrasound.map((exam, index) => (
                <div key={index} className="flex items-start gap-1 pb-2">
                  <TabGenericInput
                    value={exam.id}
                    id={`${exam.id.toString()}${exam.name}`}
                    {...register("examsUltrasound")}
                    type="checkbox"
                  />
                  <label
                    htmlFor={`${exam.id.toString()}${exam.name}`}
                    className="font-medium"
                    key={exam.id.toString()}
                  >
                    {exam.name}
                  </label>
                </div>
              ))}
              <div className="flex items-center col-span-3 pr-6">
                <label htmlFor="">Suspeita: </label>
                <Input className="py-0 rounded-none bg-inherit border-b border-black" />
              </div>
              <div className="col-span-3 w-full flex items-center pr-6">
                <div className="w-full flex items-start gap-1 pb-2 mt-2">
                  <TabGenericInput id={"sedação"} type="checkbox" />
                  <label
                    htmlFor={"sedação"}
                    className="font-medium text-nowrap"
                    key={"sedação"}
                  >
                    Pets não convencionais
                  </label>
                  <Input className="py-0 rounded-none bg-inherit border-b border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
