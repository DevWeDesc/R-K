import { randomUUID } from "crypto";

export const GenerateCode = () => {
  return randomUUID().substring(0, 5);
};
