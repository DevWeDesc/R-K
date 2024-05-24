import { ReceiverMailDTO } from "../../../application/DTOs/MailDTO/ReceiverMailDTO";
import MailModel from "../../models/mail/MailModel";

export default class SendMailUseCase {
  constructor(readonly mailModel: MailModel) {}

  public async execute(receiverEmail: ReceiverMailDTO) {
    const { subject, text, to, html, fileName, pathFile, contentFile } =
      receiverEmail;

    const transporter = await this.mailModel.createTransportMail();

    let sendEmailResponse;
    if (pathFile)
      sendEmailResponse = sendEmailResponse = await transporter.sendMail({
        from: this.mailModel.getEmail(),
        to,
        subject,
        text,
        html,
        attachments: [
          {
            path: pathFile,
          },
        ],
      });
    else
      sendEmailResponse = sendEmailResponse = await transporter.sendMail({
        from: this.mailModel.getEmail(),
        to,
        subject,
        text,
        html,
      });

    return sendEmailResponse;
  }
}
