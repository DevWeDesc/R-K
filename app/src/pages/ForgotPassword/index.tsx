import { Header } from "@/components/Header";
import { useState } from "react";
import { ICardDisplayableInForgotPassword } from "@/@interfaces/ForgotPasword/ICardDisplayableInForgotPassword";
import { FormEditPassword } from "./FormsForgetPassword/FormEditPassword";
import { FormSendCodeEmail } from "./FormsForgetPassword/FormSendCodeEmail";
import { FormVerifyCode } from "./FormsForgetPassword/FormVerifyCode";
import Cookies from "js-cookie";

export const ForgotPassword = () => {
  const [cardExible, setCardExible] = useState({
    sendCodeByEmail: true,
  } as ICardDisplayableInForgotPassword);

  return (
    <>
      <Header navIsVisible={false} />
      <div className="h-[88dvh] flex justify-center items-center">
        {Cookies.get("forgotPasswordPage") === "sendCodeByEmail" && (
          <FormSendCodeEmail
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
        {Cookies.get("forgotPasswordPage") === "VerifyCode" && (
          <FormVerifyCode
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}

        {Cookies.get("forgotPasswordPage") === "EditPassword" && (
          <FormEditPassword
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
      </div>
    </>
  );
};
