import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiLock } from "react-icons/ci";
import { CardForgotPassword } from "../CardForgotPassword";
import { IForgotPassword } from "@/@interfaces/ForgotPasword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IFormForgetPassword } from "@/@interfaces/ForgotPasword/FormForgetPassword";
import Cookies from "js-cookie";

export const FormSendCodeEmail = ({
  cardExible,
  setCardExible,
}: IFormForgetPassword) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const handleSendCodeForEmail = handleSubmit((data) => {
    const handleSubmitCode = {
      Email: data.email,
    };
    Cookies.set("forgotPasswordPage", "VerifyCode");
    toast.success(`Código enviado com sucesso para o E-mail ${data.email}`);
    setCardExible({ ...cardExible, sendCodeByEmail: false, VerifyCode: true });
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
        <div className="flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email && <InputRequiredError inputName="E-mail" />}
        </div>
        <Button type="submit" className="w-full">
          Enviar Código
        </Button>
      </form>
    </CardForgotPassword>
  );
};
