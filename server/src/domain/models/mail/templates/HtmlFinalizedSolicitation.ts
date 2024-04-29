import { SolicitationModel } from "../../Solicitation";

export const HtmlFinalizedSolicitation = (
  solicitationDetails: SolicitationModel | null | any
) => {
  return `<body
  style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; position: relative;"
>
  <div style="margin: 6.5% 5%">
    <div style="width: 30%; text-align: center; margin: auto;">
      <img
        style="width: 100%; object-fit: contain; text-align: center;"
        src="https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
        alt=""
      />
    </div>
    <br />
    <br />
    <div style="border: 2px solid black; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px; font-weight: bold;"> Solicitação de Exame</p>
      <br>
      
      <p style="margin: 5px;"><strong>Nome do Tutor: </strong> ${
        solicitationDetails.pet.customer.name
      }</p>
      <p style="margin: 5px;"><strong>CPF: </strong> ${
        solicitationDetails.pet.customer.cpf
      }</p>
      <p style="margin: 5px;"><strong>E-mail: </strong> ${
        solicitationDetails.pet.customer.email
      }</p>
      <br>

      <p><strong>Dados do Pet:</strong></p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <p style="margin: 5px;"><strong>Nome do Animal: </strong> ${
          solicitationDetails.pet.name
        }</p>
        <p style="margin: 5px;"><strong>Espécie: </strong> ${
          solicitationDetails.pet.name
        }</p>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <p style="margin: 5px;"><strong>Idade: </strong> ${
          solicitationDetails.pet.age
        }</p>
        <p style="margin: 5px;"><strong>Sexo do Animal: </strong> ${
          solicitationDetails.pet.sex
        }</p>
      </div>
    </div>
    <br>
    <div style="border: 2px solid black; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px;">
        <strong>Exames Solicitados</strong>
      </p>
      <br>
      ${solicitationDetails.exams
        .map(
          (exam: any) =>
            `
              <p>
                ${exam.Exams.name}
                <p style="margin: 0; padding: 0;"><strong style="margin: 0; padding: 0;">Preparo: </strong>${exam.Exams.preparing}</p>
              </p>
            `
        )
        .join(``)}
        <p>
          <strong>Observações:</strong> ${
            !solicitationDetails.observation
              ? "Sem observações!"
              : solicitationDetails.observation
          }
        </p>
    </div>
    <div style="margin-top: 50px">
    </div>
    <br />
    <br />
    <br />
  </div>
  <br>
  <div style="position: absolute; bottom: 50px; width: 100%; display: flex; align-items: center; font-size: 14px; gap: 20px; justify-content: center;">
    <img style="width: 100px;" src="https://www.oficinadanet.com.br/media/post/2322/330/qrcode.png" alt="">
    <div>
    <p style="margin: 0;"><strong>RK Diagnóstico</strong> – Acesso WhatsApp via QR Code</p>
    <p style="margin: 0;"><strong>Endereço:</strong> R. Ártico, 248 - Jardim do Mar, São Bernardo do Campo - SP, 09726-300</p>
    <p style="margin: 0;"><strong>Telefone:</strong> (11) 4122-3733</p>
    <p style="margin: 0;"><strong>Assinado digitalmente por:</strong> {solicitationDetails.veterinarians.name} <strong>CRMV:</strong> {solicitationDetails.veterinarians.crmv}</p>
    </div>
  </div>
</body>`;
};
