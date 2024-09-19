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

  const { register, watch } = useFormContext<IFormSolicitation>();
  return (
    <div className="col-span-2 bg-red-100/50">
      <div className="flex items-center gap-2 bg-slate-800 mb-2 px-2 py-1 font-medium text-sm rounded-lg">
        <p className="font-medium text-white text-base">RADIOLOGIA</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 text-sm px-6">
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
                <div
                  key={articulationMember.id}
                  className="flex items-start gap-1"
                >
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
          <div className="grid grid-cols-2">
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
                <div
                  key={pelvicMemberRegion.id}
                  className="flex items-start gap-1"
                >
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
        </div>
        <div className="flex flex-col gap-2 text-sm mr-6">
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
                ${
                  !watch("radiologySection.Chest.region") && "border-black/30"
                }`}
            />
          </div>
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
                {...register(
                  "radiologySection.Cervical_Region.clinicalSuspicion"
                )}
                disabled={!watch("radiologySection.Cervical_Region.region")}
                className={`py-0 px-2 border-b border-black bg-inherit rounded-none ${
                  !watch("radiologySection.Cervical_Region.region") &&
                  "border-black/30"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full grid grid-cols-6 gap-2 text-sm">
          <div className="col-span-2">
            <p className="pl-4 uppercase bg-slate-800 text-lg font-medium text-white rounded-lg">
              Cardiologia
            </p>
            <div className="pl-6 py-3 space-y-2">
              {examsWithType?.data.cardiology.map((exam) => (
                <div key={exam.id} className="flex items-start gap-1 pb-2">
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
              {examsWithType?.data.ultrasound.map((exam) => (
                <div key={exam.id} className="flex items-start gap-1 pb-2">
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
                  <TabGenericInput
                    value="Pets não convencionais"
                    id="unconventionalPets"
                    type="checkbox"
                  />
                  <label
                    htmlFor="unconventionalPets"
                    className="font-medium text-nowrap"
                    key="unconventionalPets"
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
