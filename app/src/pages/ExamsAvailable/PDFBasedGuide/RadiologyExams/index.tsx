import { UltrasoundExams } from "./UltrasoundExams";
import { CardiologyExams } from "./CardiologyExams";
import { CervicalRegion } from "./CervicalRegion";
import { Projections } from "./Projections";
import { SpineSection } from "./SpineSection";
import { AbdomenSection } from "./AbdomenSection";
import { ChestRegion } from "./ChestRegion";
import { MembersSection } from "./MembersSection";
import { SkullDentalSection } from "./SkullDentalSection";
import { SkullSection } from "./SkullSection";
import { PelvicMember } from "./PelvicMember";

export const RadiologyExams = () => {
  return (
    <div className="col-span-2 bg-red-100/50">
      <div className="flex items-center gap-2 bg-slate-800 mb-2 px-2 py-1 font-medium text-sm rounded-lg">
        <p className="font-medium text-white text-base">RADIOLOGIA</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 text-sm px-6">
          <SkullSection />
          <SkullDentalSection />
          <MembersSection />
          <PelvicMember />
        </div>
        <div className="flex flex-col gap-2 text-sm mr-6">
          <ChestRegion />
          <AbdomenSection />
          <SpineSection />
          <Projections />
          <CervicalRegion />
        </div>
        <div className="col-span-2 w-full grid grid-cols-6 gap-2 text-sm">
          <CardiologyExams />
          <UltrasoundExams />
        </div>
      </div>
    </div>
  );
};
