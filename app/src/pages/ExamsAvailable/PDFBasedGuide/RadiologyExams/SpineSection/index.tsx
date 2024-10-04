import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { useFormContext } from "react-hook-form";

export const SpineSection = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <>
      <div className="border-b border-black flex items-center">
        <div className="flex items-start gap-1 pb-2">
          <p className="font-medium">COLUNA VERTEBRAL</p>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b border-black pb-2">
        {[
          { id: "CervicalSpineRegion", value: "Cervical" },
          { id: "Coccigea/CaudalSpineRegion", value: "Coccigea/Caudal" },
          { id: "CervicotorácicaSpineRegion", value: "Cervicotorácica" },
          { id: "TodaSpineRegion", value: "Toda" },
          { id: "TorácicaSpineRegion", value: "Torácica" },
          { id: "ToracolombarSpineRegion", value: "Toracolombar" },
          { id: "LombarSpineRegion", value: "Lombar" },
          { id: "LombossacralSpineRegion", value: "Lombossacral" },
        ].map((spineRegion) => (
          <div key={spineRegion.id} className="flex items-start gap-1 pb-2">
            <TabGenericInput
              {...register("radiologySection.Spine.region")}
              value={spineRegion.value}
              id={spineRegion.id}
              type="checkbox"
            />
            <label
              htmlFor={spineRegion.id}
              className="font-medium"
              key={spineRegion.id}
            >
              {spineRegion.value}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
