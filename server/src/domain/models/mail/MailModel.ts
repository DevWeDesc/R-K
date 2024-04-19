const nodeMailder = require("nodemailer");

export default class MailModel {
  constructor(service: string, userMail: string, PasswordMailUser: string) {
    this.service = service;
    this.userMail = userMail;
    this.PasswordMailUser = PasswordMailUser;
  }

  private service;
  private userMail;
  private PasswordMailUser;

  public getEmail() {
    return this.userMail;
  }

  public createTransportMail() {
    const transporter = nodeMailder.createTransport({
      service: this.service,
      auth: {
        user: this.userMail,
        pass: this.PasswordMailUser,
      },
    });

    return transporter;
  }
}
