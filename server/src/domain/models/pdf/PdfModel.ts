import { create } from "html-pdf";

export default class PdfModel {
  public CreatePDF(pathFile: string, contentFile: string, nameFile: string) {
    create(contentFile, {}).toFile(
      `./src/infra/PDfs/${pathFile}/${nameFile}.pdf`,
      (err: any, res: any) => {
        if (err) console.log("erro ao criar pdf");
      }
    );
  }
}
