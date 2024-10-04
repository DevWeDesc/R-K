import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const CervicalRegion = () => {
  const { register, watch } = useFormContext<IFormSolicitation>();

  return (
    <div className="space-y-2">
      <p className="font-medium border-b border-black">REGIÃO CERVICAL</p>
      <div className="flex items-center">
        <div className="flex items-start gap-1 pb-2">
          <p className="font-medium">Região Cervical: </p>
          <TabGenericInput
            {...register("radiologySection.Cervical_Region.region")}
            id="cervicalRegion"
            value="Partes Moles."
            type="checkbox"
          />
          <label
            htmlFor="cervicalRegion"
            className="font-medium"
            key="cervicalRegion"
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
        <Input
          {...register("radiologySection.Cervical_Region.clinicalSuspicion")}
          disabled={!watch("radiologySection.Cervical_Region.region")}
          className={`py-0 px-2 border-b border-black bg-inherit rounded-none ${
            !watch("radiologySection.Cervical_Region.region") &&
            "border-black/30"
          }`}
        />
      </div>
    </div>
  );
};
