import { IExamsProfile } from "@/@interfaces/IExamsProfile";
import iconUrineBgWhite from "@/../public/assets/IconUrineBgWhite.png";

interface INameExamsInExamProfile {
  profile: IExamsProfile;
}

export const NameExamsInExamProfile = ({
  profile,
}: INameExamsInExamProfile) => {
  const examNames = profile.examsInExamProfile
    .map((examProfile) => examProfile.Exams.name)
    .join(" + ");

  const typeExams: string[] = [];
  profile.examsInExamProfile.filter((data) =>
    typeExams.includes(data.Exams.typeExam)
      ? null
      : typeExams.push(data.Exams.typeExam)
  );

  return (
    <div className="flex items-center gap-2">
      <p className="pl-1">
        {examNames}
        {typeExams.includes("HEMATOLOGIA") && (
          <span className="size-4 rounded-sm brightness-50">🟪</span>
        )}
        {typeExams.includes("BIOQUIMICA_CLINICA") && (
          <span className="size-4 rounded-sm brightness-50">🟥</span>
        )}
        {typeExams.includes("URINA") && (
          <span>
            <img
              src={iconUrineBgWhite}
              className="size-4 bg-red-700 rounded-sm"
            />
          </span>
        )}
      </p>
    </div>
  );
};
