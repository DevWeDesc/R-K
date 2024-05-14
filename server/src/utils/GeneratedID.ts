export const GeneratedID = (minNumber: number, maxNumber: number) => {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(minNumber * maxNumber);

  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};
