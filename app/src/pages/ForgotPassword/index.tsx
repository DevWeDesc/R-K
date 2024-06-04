import { Header } from "@/components/Header";
import { useState } from "react";
import { ICardDisplayableInForgotPassword } from "@/@interfaces/ForgotPasword/ICardDisplayableInForgotPassword";
import { FormEditPassword } from "./FormsForgetPassword/FormEditPassword";
import { FormSendCodeEmail } from "./FormsForgetPassword/FormSendCodeEmail";
import { FormVerifyCode } from "./FormsForgetPassword/FormVerifyCode";

export const ForgotPassword = () => {
  const [cardExible, setCardExible] = useState({
    sendCodeByEmail: true,
  } as ICardDisplayableInForgotPassword);

  return (
    <>
      <Header navIsVisible={false} />
      <div className="h-[88dvh] flex justify-center items-center">
        {cardExible.sendCodeByEmail && (
          <FormSendCodeEmail
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
        {cardExible.VerifyCode && (
          <FormVerifyCode
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}

        {cardExible.EditPassword && (
          <FormEditPassword
            cardExible={cardExible}
            setCardExible={(ev) => setCardExible(ev)}
          />
        )}
      </div>
    </>
  );
};
