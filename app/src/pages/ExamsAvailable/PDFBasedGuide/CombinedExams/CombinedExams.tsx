import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetExamsProfile } from "@/services/ExamsProfile/GetExamsProfile";
import { useQuery } from "react-query";
import { NameExamsInExamProfile } from "./NameExamsInExamProfile";
import { useFormContext } from "react-hook-form";
import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";

export const CombinedExams = () => {
  const { data: profiles } = useQuery({
    queryKey: ["examsProfile"],
    queryFn: () => GetExamsProfile(),
  });

  const { register } = useFormContext<IFormSolicitation>();

  return (
    <div className="text-sm">
      <p className="mb-2 py-2 px-2 bg-grayTypeExams font-medium rounded-lg">
        EXAMES COMBINADOS:
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="h-full flex flex-col justify-between">
          {profiles?.data.slice(0, 11)?.map((profile) => (
            <div
              key={profile.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                value={profile.id}
                {...register("examsProfile")}
                id={profile.id.toString()}
                type="checkbox"
              />
              <label
                htmlFor={profile.id.toString()}
                className="text-sm flex items-start"
              >
                <p>
                  <strong className="text-nowrap">
                    {profile?.name}: <span></span>
                  </strong>
                  <NameExamsInExamProfile profile={profile} />
                </p>
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {profiles?.data.slice(11, profiles.data.length).map((profile) => (
            <div
              key={profile.id}
              className="flex items-start ml-2 w-full gap-1"
            >
              <TabGenericInput
                value={profile.id}
                {...register("examsProfile")}
                id={profile.id.toString()}
                type="checkbox"
              />
              <label
                htmlFor={profile.id.toString()}
                className="text-sm flex items-start"
              >
                <p>
                  <strong className="text-nowrap">
                    {profile?.name}: <span></span>
                  </strong>
                  <NameExamsInExamProfile profile={profile} />
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
