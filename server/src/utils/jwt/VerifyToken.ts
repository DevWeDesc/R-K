import { JwtPayload, Secret, verify } from "jsonwebtoken";
require("dotenv").config();

export const VerifyToken = async (token: string): Promise<any> => {
  const decoded = verify(token, process.env.SECRET as Secret);
  return decoded;
};
