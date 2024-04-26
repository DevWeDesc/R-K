import { FormatedDate } from "../../../../utils/FormatedDate";
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
    <div>
      <p style="margin: 0">
        Data de finalização da Guia:
        <strong>${FormatedDate(new Date(), "full", "long")}</strong>
      </p>
      <br />
      <p style="margin: 0"><strong>Dados do Pet:</strong></p>
      <br />
      <p style="margin: 0">
        Nome do Animal: <strong>${solicitationDetails.pet.name}</strong>
      </p>
      <br />
      <p style="margin: 0">
        Espécie: <strong>${solicitationDetails.pet.specie}</strong>
      </p>
      <br />
      <p style="margin: 0">
        Tutor: <strong>${solicitationDetails.pet.customer.name}</strong>
      </p>
    </div>
    <div style="margin-top: 50px">
      <p>
        <strong>Exames Solicitados</strong>
      </p>
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
    </div>
    <div style="margin-top: 50px">
      <p>
        <strong>Observações:</strong> ${
          !solicitationDetails.observation
            ? "Sem observações!"
            : solicitationDetails.observation
        }
      </p>
    </div>
    <div style="margin-top: 50px">
      <p style="margin: 0"><strong>Dados do Veterinário:</strong></p>
      <br />
      <p style="margin: 0">
        Nome do Veterinário:
        <strong>${solicitationDetails.veterinarians.name}</strong>
      </p>
      <br />
      <p style="margin: 0">
        CRMV: <strong>SP-${solicitationDetails.veterinarians.crmv}</strong>
      </p>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div style="position: absolute; bottom: 0; width: 100%;">
    <p style="margin: 0; text-align: center;">Endereço: R. Ártico, 248 - Jardim do Mar, São Bernardo do Campo - SP, 09726-300</p>
    <p style="margin: 0; text-align: center;">Telefone: (11) 4122-3733</p>
  </div>
</body>`;
};
