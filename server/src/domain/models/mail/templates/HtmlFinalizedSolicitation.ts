import { FormatedDate } from "../../../../utils/FormatedDate";
import { SolicitationModel } from "../../Solicitation";

export const HtmlFinalizedSolicitation = (
  solicitationDetails: SolicitationModel | null | any
) => {
  return `<body
  style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif"
>
  <div style="margin: 6.5% 5%">
    <img
      style="width: 25%; object-fit: contain"
      src="https://rkdiagnostico.com.br/wp-content/uploads/2021/07/logo-rkdiagnostico-colorido.png"
      alt=""
    />
    <br/>
    <br/>
    <div>
      <p style="margin: 0">
        Data de finalização da Guia: <strong>${FormatedDate(
          new Date(),
          "full",
          "long"
        )}</strong>
      </p>
      <br/>
      <p style="margin: 0"><strong>Dados do Pet:</strong></p>
      <br/>
      <p style="margin: 0">Nome do Animal: <strong>${
        solicitationDetails.pet.name
      }</strong></p>
      <br/>
      <p style="margin: 0">Espécie: <strong>${
        solicitationDetails.pet.specie
      }</strong></p>
      <br/>
      <p style="margin: 0">Tutor: <strong>${
        solicitationDetails.pet.customer.name
      }</strong></p>
    </div>
    <div
      style="
        margin-top: 50px;
      "
    >
      <p>
        <strong>Observações:</strong> ${
          !solicitationDetails.observation
            ? "Sem observações!"
            : solicitationDetails.observation
        }
      </p>
    </div>
    <div
      style="
        margin-top: 50px;
      "
    >
      <p style="margin: 0"><strong>Dados do Veterinário:</strong></p>
      <br/>
      <p style="margin: 0">
        Nome do Veterinário: <strong>${
          solicitationDetails.veterinarians.name
        }</strong>
      </p>
      <br/>
      <p style="margin: 0">CRMV: <strong>SP-${
        solicitationDetails.veterinarians.crmv
      }</strong></p>
    </div>
    <br/>
    <br/>
    <br/>
  </div>
</body>`;
};
