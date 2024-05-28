import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { ZodType, z } from "zod";

export const VerifyCodeSchema: ZodType<IForgotPassword> = z.object({
  code: z.string().length(5, { message: "Código inválido!" }),
});
