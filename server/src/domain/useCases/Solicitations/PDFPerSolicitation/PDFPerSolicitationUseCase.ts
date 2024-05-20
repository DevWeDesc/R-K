const fs = require("fs");

export default class PDFPerSolicitationUseCase {
  constructor() {}

  public async execute(namePdf: string) {
    const pathFile = `./src/infra/PDFs/${namePdf}.pdf`;

    if (!fs.existsSync(pathFile)) throw new Error("Arquivo não encontrado");

    return fs.readFileSync(pathFile);
  }
}
