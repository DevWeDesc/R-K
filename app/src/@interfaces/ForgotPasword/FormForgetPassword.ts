import { ICardDisplayableInForgotPassword } from "./ICardDisplayableInForgotPassword";

export interface IFormForgetPassword {
  cardExible: ICardDisplayableInForgotPassword;
  setCardExible: React.Dispatch<
    React.SetStateAction<ICardDisplayableInForgotPassword>
  >;
}
