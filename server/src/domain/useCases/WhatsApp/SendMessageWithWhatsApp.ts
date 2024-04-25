const client = require("twilio")(
  process.env.ACCOUNTSIDWHATS,
  process.env.AUTHTOKENWHATS
);

export default class SendMessageWithWhatsApp {
  public async execute(message: string, numberReceiver: string) {
    await client.messages
      .create({
        body: message,
        from: "whatsapp:+14155238886",
        to: `whatsapp:${numberReceiver}`,
      })
      .catch(() => {
        throw new Error("Erro ao enviar WhatsApp!");
      });
  }
}
