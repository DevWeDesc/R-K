const fs = require("fs");
import path from "path";

export default class PDFPerSolicitationUseCase {
  constructor() {}

  public async execute(namePdf: string) {
    const pathFile = path.join(
      __dirname,
      "../../../",
      `src/infra/PDFs/${namePdf}.pdf`
    );

    if (!fs.existsSync(pathFile)) throw new Error("Arquivo não encontrado");

    return fs.readFileSync(pathFile);
  }
}
