export default class EmailNotValidError extends Error {
  constructor() {
    super("O E-mail informado é inválido, verifique se está correto!");
    this.name = "PhoneAlreadyUsedError";
  }
}
module.exports = EmailNotValidError;
