import { IRegisterForm } from "@/@interfaces/IRegisterForm";
import { ZodType, z } from "zod";

export const RegisterSchema: ZodType<IRegisterForm> = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório" }),
  lastname: z.string().min(1, { message: "O campo sobrenome é obrigatório" }),
  crmv: z.string().length(6, { message: "Numeração de CRMV inválida" }),
  email: z.string().email({ message: "E-mail informado é inválido!" }),
  phone: z.string().min(1, { message: "O campo Telefone é obrigatório" }),
  state: z.string().min(1, { message: "O campo Estado é obrigatório" }),
  password: z.string().min(1, { message: "O campo Senha é obrigatório" }),
  confirmationPassword: z
    .string()
    .min(1, { message: "O campo Confirmar Senha é obrigatório" }),
});
