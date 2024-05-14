const twilioClient = require("twilio")(
  process.env.ACCOUNTSIDWHATS as string,
  process.env.AUTHTOKENWHATS as string
);

export default class SendMessageWithWhatsApp {
  public async execute(
    message: string,
    numberReceiver: string,
    pathMedia?: string
  ) {
    numberReceiver = numberReceiver.replace(/[()\s]/g, "").replace(" ", "");

    await twilioClient.messages
      .create({
        mediaUrl: [pathMedia],
        body: message,
        from: "whatsapp:+14155238886",
        to: `whatsapp:${numberReceiver}`,
      })
      .catch((err: any) => {
        console.log(err);
        throw new Error("Erro ao enviar WhatsApp!");
      });
  }
}
