import { AllExamsWithType } from "./AllExamsWithType";
import { CombinedExams } from "./CombinedExams/CombinedExams";
import { HeaderGuide } from "./HeaderGuide";
import { InformationsGuide } from "./InformationsGuide";

export const PDFBasedGuide = () => {
  return (
    <div className="w-full p-10">
      <HeaderGuide />
      <InformationsGuide />
      <CombinedExams />
      <AllExamsWithType />
    </div>
  );
};
