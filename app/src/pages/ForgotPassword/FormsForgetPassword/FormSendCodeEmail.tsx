import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiLock } from "react-icons/ci";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPasswordProps } from "@/@interfaces/ForgotPasword/FormForgetPassword";
import { SendCodeForEmailService } from "@/services/User/ForgotPassword/SendCodeForEmailService";

import { zodResolver } from "@hookform/resolvers/zod";
import { SendCodeForEmailSchema } from "@/schemas/SendCodeForEmailSchema";

export const FormSendCodeEmail = ({
  cardExible,
  setCardExible,
}: IFormForgetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    resolver: zodResolver(SendCodeForEmailSchema),
  });

  const handleSendCodeForEmail = handleSubmit(async (data) => {
    const { email } = data;

    if (!email) return toast.error("Não foi informado nenhum email!");

    const handleSubmitCode = {
      email,
    };
    await SendCodeForEmailService(handleSubmitCode).then(() => {
      toast.success(`Código enviado com sucesso para o E-mail ${data.email}`);
      setCardExible({
        ...cardExible,
        sendCodeByEmail: false,
        VerifyCode: true,
      });
    });
  });

  return (
    <CardForgotPassword
      icon={<CiLock size={81} />}
      title="Não consegue entrar, por esquecer a senha?"
      description="Insira o seu E-mail, e enviaremos um código de verificação para a confirmarmos a sua identidade!"
      textButton="Enviar Código"
    >
      <form
        onSubmit={handleSendCodeForEmail}
        className="flex flex-col items-center gap-4 w-full"
      >
        <div className="flex flex-col gap-2 w-full">
          <Input
            className="w-full"
            {...register("email")}
            placeholder="E-mail"
          />
          {errors.email && (
            <p className="text-xs pl-2 text-red-700 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Enviar Código
        </Button>
      </form>
    </CardForgotPassword>
  );
};
