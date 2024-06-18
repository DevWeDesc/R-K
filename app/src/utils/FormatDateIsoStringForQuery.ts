export const FormatDateIsoStringForQuery = (date: string) => {
  return date.replace(/:/g, "%3A");
};
