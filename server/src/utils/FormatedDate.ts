type DateStyleOption = "full" | "long" | "medium" | "short" | undefined;

type timeStyleOption = "full" | "long" | "medium" | "short" | undefined;

export const FormatedDate = (
  date: Date,
  dateStyle: DateStyleOption,
  timeStyle: timeStyleOption
) => {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: dateStyle,
    timeStyle: timeStyle,
  }).format(date);
};
