import { TabGenericInput } from "@/components/TabExamsCheckbox";
import { GetExamsProfile } from "@/services/ExamsProfile/GetExamsProfile";
import { useQuery } from "react-query";
import { NameExamsInExamProfile } from "./NameExamsInExamProfile";

export const CombinedExams = () => {
  const { data: profiles } = useQuery({
    queryKey: ["examsProfile"],
    queryFn: () => GetExamsProfile(),
  });

  return (
    <div className="text-sm">
      <p className="mb-2 py-2 px-2 bg-grayTypeExams font-medium rounded-lg">
        EXAMES COMBINADOS:
      </p>
      <div className="grid grid-cols-2 gap-5">
        {profiles?.data
          .filter((profile) => profile.examsInExamProfile.length > 0)
          .map((profile) => (
            <div className="flex items-center ml-2 w-full gap-1">
              <TabGenericInput id={profile.id.toString()} type="checkbox" />
              <label
                htmlFor={profile.id.toString()}
                className="text-sm flex items-center"
              >
                <strong>{profile?.name}: </strong>
                <NameExamsInExamProfile profile={profile} />
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};
