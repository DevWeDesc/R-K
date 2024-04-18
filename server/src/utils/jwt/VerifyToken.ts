import { Secret, verify } from "jsonwebtoken";
require("dotenv").config();

export const VerifyToken = (token: string) => {
  const decoded = verify(token, process.env.SECRET as Secret);
  return decoded;
};
