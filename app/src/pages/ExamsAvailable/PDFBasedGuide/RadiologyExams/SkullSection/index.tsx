import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const SkullSection = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <>
      <div className="flex items-center border-b border-black">
        <p className="font-medium">CRÂNIO</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium">Região: </p>
        <Input
          {...register("radiologySection.Skull.region")}
          className="bg-inherit py-0 border-b border-black rounded-none"
        />
      </div>
      <div className="flex items-start w-full gap-1 ">
        <TabGenericInput
          {...register("radiologySection.Skull.sedation")}
          id="skullSedation"
          type="checkbox"
        />
        <label
          htmlFor="skullSedation"
          className="text-sm font-medium"
          key="skullSedation"
        >
          Sedação
        </label>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-nowrap font-medium">Suspeita clínica: </p>{" "}
        <Input
          {...register("radiologySection.Skull.clinicalSuspicion")}
          className="bg-inherit py-0 border-b border-black rounded-none"
        />
      </div>
    </>
  );
};
