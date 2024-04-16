export default class SolicitationsNotFoundError extends Error {
  constructor() {
    super("A Guia informada é inválida!");
    this.name = "SolicitationsNotFoundError";
  }
}
