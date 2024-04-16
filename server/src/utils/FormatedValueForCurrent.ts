export const FormatedValueForCurrent = (value: number) => {
  return Intl.NumberFormat("sp-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
