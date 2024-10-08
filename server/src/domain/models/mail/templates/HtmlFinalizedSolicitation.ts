import { FormatedDate } from "../../../../utils/FormatedDate";
import { SolicitationModel } from "../../Solicitation";
import moment from "moment";

export const HtmlFinalizedSolicitation = (
  solicitationDetails: SolicitationModel
) => {
  const ageAnimal = moment(solicitationDetails.pet.dateOfBirth)
    .fromNow()
    .split(" ");

  const formatAnimalAge = () => {
    return `${ageAnimal[0].replace("a", "1")} ${ageAnimal[1]
      .replace("months", "meses")
      .replace("years", "anos")
      .replace("month", "mês")
      .replace("year", "ano")}`;
  };

  return `<body
  style="margin: 0; padding: 0; font-family: 'Times New Roman', Times, serif; position: relative;"
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
    <div style="border: 1px solid gray; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px; font-weight: bold;"> Solicitação de Exame</p>
      <br>
      <table style="width: 100%;">
        <tr>
          <td>  <p style="margin: 0 5px;"><strong>Nome do Tutor: </strong> ${
            solicitationDetails.pet.customer.name
          }</p></td>
          <td style="text-align: end;"><strong>Data e Hora:</strong> ${FormatedDate(
            new Date(),
            "short",
            "medium"
          ).replace(",", " - ")}</td>
        </tr>
        <tr>
          <td colspan="2">
            <p style="margin: 0 5px;"><strong>CPF: </strong> ${
              solicitationDetails.pet.customer.cpf
            }</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <p style="margin: 0 5px;"><strong>E-mail: </strong> ${
              solicitationDetails.pet.customer.email
            }</p>
          </td>
        </tr>
      </table>
      <br>
      <table style="width: 100%;">
        <tr>
          <th style="text-align: left;"><p style="margin: 5px;">Dados do Pet:</p></th>
        </tr>
        <tr>
          <td>    
            <p style="margin: 0 5px;"><strong>Nome do Animal: </strong> ${
              solicitationDetails.pet.name
            }</p>
           </td>
          <td style="text-align: end;">
            <p style="margin: 0 5px;"><strong>Espécie: </strong> ${
              solicitationDetails.pet.name
            }</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="margin: 0 5px;"><strong>Idade: </strong> ${formatAnimalAge()}</p>
          </td>
          <td style="text-align: end;"> 
            <p style="margin: 0 5px;"><strong>Sexo do Animal: </strong> ${
              solicitationDetails.pet.sex
            }</p>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <div style="border: 1px solid gray; padding: 20px;">
      <p style="margin: 0; text-align: center; font-size: 22px;">
        <strong>Exames Solicitados</strong>
      </p>
      <br>
      ${solicitationDetails.exams
        .map(
          (exam: any) =>
            `
              <p style="margin-bottom: 0;">
                - ${exam.Exams.name}
                <p style="margin: 0; padding: 0;"><strong style="margin: 0; padding: 0;">Preparo: </strong>${exam.Exams.preparing}</p>
              </p>
            `
        )
        .join(``)}
        <br>
        <p>
          <strong>Observações:</strong> ${
            !solicitationDetails.observation
              ? "Sem observações!"
              : solicitationDetails.observation
          }
        </p>
    </div>
  </div>
  <table style="font-size: 12px; width: 80%; margin: auto; margin-top: 50px">
    <tr>
      <tr>
        <td rowspan="5">
        <img style="width: 100px;" src="https://www.oficinadanet.com.br/media/post/2322/330/qrcode.png" alt="">
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin: 0;"><strong>RK Diagnóstico</strong> – Acesso WhatsApp via QR Code</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Endereço:</strong> R. Ártico, 248 - Jardim do Mar, São Bernardo do Campo - SP, 09726-300</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Telefone:</strong> (11) 4122-3733</p>
        </td>
      </tr>
      <tr>
        <td>
            <p style="margin: 0;"><strong>Assinado digitalmente por:</strong> ${
              solicitationDetails.veterinarians.name
            } <strong>CRMV:</strong> ${
    solicitationDetails.veterinarians.crmv
  }</p>
        </td>
      </tr>
    </tr>
    <div>
    </div>
  </table>
</body>`;
};
