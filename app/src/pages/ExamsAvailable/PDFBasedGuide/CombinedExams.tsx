import { GetExamsProfile } from "@/services/ExamsProfile/GetExamsProfile";
import { SolicitationById } from "@/services/Solicitations/SolicitationById";
import { useQuery } from "react-query";

export const CombinedExams = () => {
  const { data, refetch } = useQuery({
    queryKey: ["examsProfile"],
    queryFn: () => GetExamsProfile(),
  });

  return (
    <div className="text-sm">
      <p className="py-2 px-2 bg-gray-300">EXAMES COMBINADOS:</p>
      <div>
        {data?.data?.map((profile) => (
          <p className="text-xs">
            <strong>{profile?.name}: </strong>
            {profile?.examsInExamProfile?.map((exam) => {
              return <span> {exam.Exams.name} +</span>;
            })}
          </p>
        ))}
      </div>
    </div>
  );
};
