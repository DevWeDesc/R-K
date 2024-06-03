export const FormatterPhone = (phone: string) => {
  return phone
    .replace(/[()\s]/g, "")
    .replace(" ", "")
    .replace("-", "");
};
