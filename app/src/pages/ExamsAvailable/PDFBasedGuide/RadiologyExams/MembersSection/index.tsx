import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { useFormContext } from "react-hook-form";

export const MembersSection = () => {
  const { register } = useFormContext<IFormSolicitation>();

  return (
    <>
      <p className="border-b border-black font-medium">MEMBROS</p>
      <div className="flex items-center gap-2">
        <p className="font-medium">Membro Torácico</p>
        {[
          { id: "rightRegionMember", value: "Direito" },
          { id: "leftRegionMember", value: "Esquerdo" },
        ].map((regionMember) => (
          <div key={regionMember.id} className="flex items-start gap-1">
            <TabGenericInput
              {...register("radiologySection.Members.side")}
              id={regionMember.id}
              value={regionMember.value}
              type="checkbox"
            />
            <label
              htmlFor={regionMember.id}
              className="text-sm"
              key={regionMember.id}
            >
              {regionMember.value}
            </label>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <p className="font-medium">Região: </p>
        <div>
          {[
            { id: "ScapulaRegion", value: "Escápula" },
            { id: "HumerusRegion", value: "Úmero" },
            { id: "Radius/ulnaRegion", value: "Rádio/ulna" },
            {
              id: "CarpalsMetacarpalsPhalangesRegion",
              value: "Carpos, metacarpos e falanges.",
            },
          ].map((articulationMember) => (
            <div key={articulationMember.id} className="flex items-start gap-1">
              <TabGenericInput
                {...register("radiologySection.Members.articulation")}
                id={articulationMember.id}
                value={articulationMember.value}
                type="checkbox"
              />
              <label
                htmlFor={articulationMember.id}
                className="text-sm font-medium"
                key={articulationMember.id}
              >
                {articulationMember.value}
              </label>
            </div>
          ))}
        </div>
        <p className="font-medium">Articulação: </p>
        <div>
          {[
            { id: "ScapulohumeralArticulation", value: "Escapuloumeral" },
            {
              id: "humeroradioulnarArticulation",
              value: "Umerorradioulnar",
            },
            {
              id: "CárpicaCarpometacárpicaArticulation",
              value:
                "Cárpica / Carpometacárpica / Metacarpofalangeana / Interfalangeana",
            },
          ].map((articulation) => (
            <div key={articulation.id} className="flex items-start gap-1">
              <TabGenericInput
                value={articulation.value}
                id={articulation.id}
                type="checkbox"
              />
              <label
                htmlFor={articulation.id}
                className="text-sm font-medium"
                key={articulation.id}
              >
                {articulation.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
