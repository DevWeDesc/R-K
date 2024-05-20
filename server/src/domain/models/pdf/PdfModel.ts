import { create } from "html-pdf";
import path from "path";

export default class PdfModel {
  public CreatePDF(contentFile: string, nameFile: string) {
    const pathRelative = path.join(
      __dirname,
      "../../../",
      `infra/PDFs/${nameFile}.pdf`
    );

    create(contentFile, {}).toFile(pathRelative, (err: any, res: any) => {
      if (err) console.log("erro ao criar pdf");
    });
  }
}
