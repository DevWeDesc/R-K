import { ICardDisplayableInForgotPassword } from "./ICardDisplayableInForgotPassword";

export interface IFormForgetPasswordProps {
  cardExible: ICardDisplayableInForgotPassword;
  setCardExible: React.Dispatch<
    React.SetStateAction<ICardDisplayableInForgotPassword>
  >;
}
