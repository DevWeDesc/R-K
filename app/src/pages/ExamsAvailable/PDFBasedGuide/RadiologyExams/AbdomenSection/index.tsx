import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const AbdomenSection = () => {
  const { register, watch } = useFormContext<IFormSolicitation>();

  return (
    <>
      <div className="border-b border-black flex items-center">
        <div className="flex items-start gap-1 pb-2">
          <TabGenericInput
            {...register("radiologySection.Abdomen.region")}
            id={"AbdomenRegion"}
            value="Abdômen"
            type="checkbox"
          />
          <label
            htmlFor={"AbdomenRegion"}
            className="font-medium"
            key={"AbdomenRegion"}
          >
            ABDÔMEN
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor=""
          className={`font-medium ${
            !watch("radiologySection.Abdomen.region") && "text-black/50"
          }`}
        >
          Suspeita clínica:
        </label>
        <Input
          disabled={!watch("radiologySection.Abdomen.region")}
          {...register("radiologySection.Abdomen.clinicalSuspicion")}
          className={`px-1 py-1 bg-inherit border-b border-black rounded-none ${
            !watch("radiologySection.Abdomen.region") && "border-black/30"
          }`}
        />
      </div>
    </>
  );
};
