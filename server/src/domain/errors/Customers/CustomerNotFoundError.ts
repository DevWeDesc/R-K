export default class CustomerNotFoundError extends Error {
  constructor() {
    super("O Cliente informado é inválido!");
    this.name = "CustomerNotFoundError";
  }
}
