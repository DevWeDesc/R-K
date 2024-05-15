export default class EmailAlreadyUsedError extends Error {
  constructor() {
    super("Já existe um cliente com esse E-mail no sistema!");
    this.name = "EmailAlreadyUsedError";
  }
}
