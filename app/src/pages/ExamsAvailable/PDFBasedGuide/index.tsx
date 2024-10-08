import { useForm, FormProvider } from "react-hook-form";
import { AllExamsWithType } from "./AllExamsWithType";
import { CombinedExams } from "./CombinedExams/CombinedExams";
import { HeaderGuide } from "./HeaderGuide";
import { InformationsGuide } from "./InformationsGuide";
import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { AdditionalInformations } from "./AdditionalInformations";

export const PDFBasedGuide = () => {
  const methods = useForm<IFormSolicitation>();

  return (
    <div className="w-full p-10">
      <HeaderGuide />
      <InformationsGuide />
      <FormProvider {...methods}>
        <AdditionalInformations />
        <CombinedExams />
        <AllExamsWithType />
      </FormProvider>
    </div>
  );
};
