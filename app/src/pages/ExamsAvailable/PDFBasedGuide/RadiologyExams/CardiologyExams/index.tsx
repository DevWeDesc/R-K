import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";

export const CardiologyExams = () => {
  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  const { register } = useFormContext<IFormSolicitation>();

  return (
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
  );
};
