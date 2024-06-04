import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TfiKey } from "react-icons/tfi";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPasswordProps } from "@/@interfaces/ForgotPasword/FormForgetPassword";

import { VerifyCodeServices } from "@/services/User/ForgotPassword/VerifyCodeServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerifyCodeSchema } from "@/schemas/VerifyCodeSchema";

export const FormVerifyCode = ({
  cardExible,
  setCardExible,
}: IFormForgetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({ resolver: zodResolver(VerifyCodeSchema) });

  const handleVerifyCode = handleSubmit(async (data) => {
    const { code } = data;
    if (!code) return toast.error("Não foi informado nenhum código!");

    const handleSubmitVerifyCode = {
      code,
    };
    await VerifyCodeServices(handleSubmitVerifyCode)
      .then(() => {
        toast.success(`Verificação executada com sucesso!`);
        setCardExible({ ...cardExible, VerifyCode: false, EditPassword: true });
      })
      .catch(() => toast.error("Erro ao enviar código"));
  });

  return (
    <CardForgotPassword
      icon={<TfiKey size={81} />}
      title="Código de Verificação enviado"
      description="Enviamos o Código de verificação para o seu E-mail, insira o código neste campo abaixo para confirmarmos sua identidade"
      textButton="Enviar Código"
    >
      <form
        onSubmit={handleVerifyCode}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            {...register("code")}
            placeholder="Código de Verificação"
          />
          {errors.code && (
            <p className="pl-2 text-xs text-red-700 font-medium">
              {errors.code.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Verificar Código
        </Button>
      </form>
    </CardForgotPassword>
  );
};
