import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const ChestRegion = () => {
  const { register, watch } = useFormContext<IFormSolicitation>();

  return (
    <>
      <div className="border-b border-black flex items-center">
        <div className="flex items-start gap-1 pb-2">
          <TabGenericInput
            value="Tórax"
            {...register("radiologySection.Chest.region")}
            id={"ToraxRegion"}
            type="checkbox"
          />
          <label
            htmlFor={"ToraxRegion"}
            className="font-medium"
            key={"ToraxRegion"}
          >
            TÓRAX
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor=""
          className={`font-medium  ${
            !watch("radiologySection.Chest.region") && "text-black/50"
          }`}
        >
          Suspeita clínica:
        </label>
        <Input
          {...register("radiologySection.Chest.clinicalSuspicion")}
          disabled={!watch("radiologySection.Chest.region")}
          className={`
        px-1 py-1 bg-inherit border-b border-black rounded-none
        ${!watch("radiologySection.Chest.region") && "border-black/30"}`}
        />
      </div>
    </>
  );
};
