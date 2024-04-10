export default class VeterinarianNotFoundError extends Error {
  constructor() {
    super("Veterinário não encontrado!");
    this.name = "VeterinarianNotFoundError";
  }
}

module.exports = VeterinarianNotFoundError;
