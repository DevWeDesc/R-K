import { ForgetPasswordUseCase } from "./ForgetPasswordUseCase";

export default class VerifyCodeUseCase {
  constructor(readonly forgetPasswordUseCase: ForgetPasswordUseCase) {}

  public async execute(code: string) {
    if (this.forgetPasswordUseCase.getCode() != code)
      throw new Error("O código informado é inválido!");

    return "O código inserido é válido, pode redefinir sua senha!";
  }
}
