import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { useFormContext } from "react-hook-form";

export const Projections = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <div className="flex items-start gap-1 pb-2">
      <p className="font-medium">PROJEÇÕES: </p>
      <TabGenericInput
        {...register("radiologySection.Projections.region")}
        value="A critério do radiologista."
        id="projectionRegion"
        type="checkbox"
      />
      <label
        htmlFor="projectionRegion"
        className="font-medium"
        key="projectionRegion"
      >
        A critério do radiologista.
      </label>
    </div>
  );
};
