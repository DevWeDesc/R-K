import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { Input } from "@/components/ui/input";
import { GetAllExamsWithTypeService } from "@/services/Exams/GetAllExamsWithTypeService";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";

export const UltrasoundExams = () => {
  const { data: examsWithType } = useQuery({
    queryKey: ["ExamsWithType"],
    queryFn: () => GetAllExamsWithTypeService(),
  });

  const { register } = useFormContext<IFormSolicitation>();

  return (
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
  );
};
