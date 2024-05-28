import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { ZodType, z } from "zod";

export const SendCodeForEmailSchema: ZodType<IForgotPassword> = z.object({
  email: z.string().email({ message: "O email informado é inválido!" }),
});
