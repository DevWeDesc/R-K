import { ILoginUser } from "@/@interfaces/ILoginForm";
import { ZodType, z } from "zod";

export const LoginSchema: ZodType<ILoginUser> = z.object({
  state: z.string().min(1, { message: "O campo senha é obrigatório!" }),
  crmv: z.string().length(6, { message: "Numeração de CRMV inválida" }),
  email: z
    .string()
    .email({ message: "O E-mail informado é inválido!" })
    .min(1, { message: "O campo senha é obrigatório!" }),
  password: z.string().min(1, { message: "O campo senha é obrigatório!" }),
});
