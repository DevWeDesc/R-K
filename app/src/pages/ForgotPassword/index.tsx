import { Header } from "@/components/Header";
import { useState } from "react";
import { ICardDisplayableInForgotPassword } from "@/@interfaces/ForgotPasword/ICardDisplayableInForgotPassword";
import { FormEditPassword } from "./FormsForgetPassword/FormEditPassword";
import { FormSendCodeEmail } from "./FormsForgetPassword/FormSendCodeEmail";
import { FormVerifyCode } from "./FormsForgetPassword/FormVerifyCode";
import { cookieSection } from "@/services/UserLocal";

export const ForgotPassword = () => {
  const [cardExible, setCardExible] = useState({
    sendCodeByEmail: true,
  } as ICardDisplayableInForgotPassword);

  return (
    <>
      <Header navIsVisible={false} />
      <div className="h-[88dvh] flex justify-center items-center">
        {(cookieSection === "sendCodeByEmail" || cookieSection === "") && (
          <FormSendCodeEmail
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
        {cookieSection === "VerifyCode" && (
          <FormVerifyCode
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}

        {cookieSection === "EditPassword" && (
          <FormEditPassword
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
      </div>
    </>
  );
};
