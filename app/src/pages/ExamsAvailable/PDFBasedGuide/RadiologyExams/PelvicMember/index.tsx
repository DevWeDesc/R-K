import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const PelvicMember = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <>
      <div className="flex items-center gap-4">
        <p className="font-medium">Membro Pélvico</p>
        {[
          { id: "PelvicSideRight", value: "Direita" },
          {
            id: "PelvicSideLeft",
            value: "Esquerda",
          },
        ].map((pelvicSide) => (
          <div key={pelvicSide.id} className="flex items-start gap-1">
            <TabGenericInput
              {...register("radiologySection.Pelvic_Limb.side")}
              value={pelvicSide.value}
              id={pelvicSide.id}
              type="checkbox"
            />
            <label
              htmlFor={pelvicSide.id}
              className="text-sm font-medium"
              key={pelvicSide.id}
            >
              {pelvicSide.value}
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="font-medium">Obs:</span>
        <Input
          {...register("radiologySection.Pelvic_Limb.observation")}
          className="py-0 bg-inherit rounded-none border-b border-black"
        />
      </div>

      <div className="flex gap-2">
        <p className="font-medium">Região: </p>
        <div>
          {[
            { id: "FemurPelvicMemberRegion", value: "Fêmur" },
            {
              id: "TibiaetatarsalsPelvicMemberRegion",
              value: "Tíbia / Fíbula",
            },
            {
              id: "TarsiMetatarsalsEtcPelvicMemberRegion",
              value: "Tarsos, metatarsos e falanges.",
            },
          ].map((pelvicMemberRegion) => (
            <div key={pelvicMemberRegion.id} className="flex items-start gap-1">
              <TabGenericInput
                {...register("radiologySection.Pelvic_Limb.region")}
                value={pelvicMemberRegion.value}
                id={pelvicMemberRegion.id}
                type="checkbox"
              />
              <label
                htmlFor={pelvicMemberRegion.id}
                className="text-sm font-medium"
                key={pelvicMemberRegion.id}
              >
                {pelvicMemberRegion.value}
              </label>
            </div>
          ))}
        </div>
        <p className="font-medium">Articulação: </p>
        <div>
          {[
            {
              id: "CoxofemoralMemberPelvicArticulation",
              value: "Coxofemoral",
            },
            {
              id: "FemurotibiopatelarMemberPelvicArticulation",
              value: "Femurotibiopatelar",
            },
            {
              id: "TarsicaTarsometatarsicaMemberPelvicArticulation",
              value:
                "Társica / Tarsometatársica / Metatarsofalangeana / Interfalangeana",
            },
          ].map((pelvicMemberArticulation) => (
            <div
              key={pelvicMemberArticulation.id}
              className="flex items-start gap-1"
            >
              <TabGenericInput
                {...register("radiologySection.Pelvic_Limb.articulation")}
                value={pelvicMemberArticulation.value}
                id={pelvicMemberArticulation.id}
                type="checkbox"
              />
              <label
                htmlFor={pelvicMemberArticulation.id}
                className="text-sm font-medium"
                key={pelvicMemberArticulation.id}
              >
                {pelvicMemberArticulation.value}
              </label>
            </div>
          ))}

          <div className="flex items-center">
            <span className="font-medium">Obs:</span>
            <Input className="py-0 bg-inherit rounded-none border-b border-black" />
          </div>
        </div>
      </div>
    </>
  );
};
