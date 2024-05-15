export default class PhoneAlreadyUsedError extends Error {
  constructor() {
    super("Já existe um cliente com esse Telefone no sistema!");
    this.name = "PhoneAlreadyUsedError";
  }
}
