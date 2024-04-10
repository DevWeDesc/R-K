class VeterinarianNotFound extends Error {
  constructor() {
    super("Veterinário não encontrado!");
    this.name = "VeterinarianNotFoundError";
  }
}

module.exports = VeterinarianNotFound;
