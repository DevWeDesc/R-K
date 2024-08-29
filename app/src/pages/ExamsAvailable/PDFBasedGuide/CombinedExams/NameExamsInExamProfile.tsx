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
    <span className="pl-1 font-medium">
      <span className="text-black/50 font-medium">{examNames}</span>
      {typeExams.includes("HEMATOLOGIA") && (
        <span className="size-4 rounded-sm brightness-50 contrast-150">🟪</span>
      )}
      {typeExams.includes("BIOQUIMICA_CLINICA") && (
        <span className="size-4 rounded-sm brightness-75">🟥</span>
      )}
      {typeExams.includes("URINA") && (
        <span>
          <img
            src={iconUrineBgWhite}
            className="inline size-4 bg-red-700 rounded-sm"
          />
        </span>
      )}
    </span>
  );
};
