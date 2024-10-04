import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { useFormContext } from "react-hook-form";

export const SkullDentalSection = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <>
      <p className="font-medium">
        Crânio - Arcada Dentária (necessário sedação)
      </p>
      <div className="grid grid-cols-6">
        <div>
          <div className="flex items-start w-full gap-1">
            <TabGenericInput
              {...register("radiologySection.Skull_Dental_Arch.regions")}
              id="upperRegion"
              type="checkbox"
              value="Superior"
            />
            <label
              htmlFor="upperRegion"
              className="text-sm font-medium"
              key="upperRegion"
            >
              Superior
            </label>
          </div>
        </div>
        <div>
          {[
            { id: "rightRegion", value: "Direita" },
            {
              id: "leftRegion",
              value: "Esquerda",
            },
            {
              id: "incisivesRegion",
              value: "Incisivos",
            },
          ].map((region) => (
            <div key={region.id} className="flex items-start w-full gap-1">
              <TabGenericInput
                {...register("radiologySection.Skull_Dental_Arch.regions")}
                id={region.id}
                value={region.value}
                type="checkbox"
              />
              <label
                htmlFor={region.id}
                className="text-sm font-medium"
                key={region.id}
              >
                {region.value}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-start w-full gap-1">
            <TabGenericInput
              {...register("radiologySection.Skull_Dental_Arch.regions")}
              id="lowerRegion"
              type="checkbox"
              value="Inferior"
            />
            <label
              htmlFor="lowerRegion"
              className="text-sm font-medium"
              key="lowerRegion"
            >
              Inferior
            </label>
          </div>
        </div>
        <div>
          {[
            { id: "rightRegion2", value: "Direita" },
            {
              id: "leftRegion2",
              value: "Esquerda",
            },
            {
              id: "IncisivesRegion2",
              value: "Incisivos",
            },
          ].map((region) => (
            <div key={region.id} className="flex items-start w-full gap-1">
              <TabGenericInput
                {...register("radiologySection.Skull_Dental_Arch.regions")}
                id={region.id}
                value={region.value}
                type="checkbox"
              />
              <label
                htmlFor={region.id}
                className="text-sm font-medium"
                key={region.id}
              >
                {region.value}
              </label>
            </div>
          ))}
        </div>
        <div className="col-span-2 ml-4">
          <textarea
            {...register(
              "radiologySection.Skull_Dental_Arch.clinicalSuspicion"
            )}
            placeholder="Suspeita clínica"
            className="p-1 w-full h-full max-h-16 bg-transparent border border-black"
          />
        </div>
      </div>
    </>
  );
};
