import { FormatedDate } from "../../../utils/FormatedDate";
import { FormatterPhone } from "../../../utils/FormatterPhone";
import { SolicitationModel } from "../../models/Solicitation";

export const FormatterMessageFromWhatsApp = (
  solicitationModel: SolicitationModel,
  pdfName: string
): string => {
  const numberFormatted = FormatterPhone(solicitationModel.pet.customer.phone);
  return `
*Nome do Tutor*: ${solicitationModel.pet.customer.name}
*Data e Hora*: ${FormatedDate(new Date(), "short", "medium")}
*E-mail*: ${solicitationModel.pet.customer.email}
*Telefone*: ${solicitationModel.pet.customer.phone}

*Dados do Pet*
*Nome*: ${solicitationModel.pet.name}        *Espécie*: ${
    solicitationModel.pet.specie
  }
*Idade*: ${solicitationModel.pet.dateOfBirth}        *Sexo do animal*: ${
    solicitationModel.pet.sex
  }

*Exames Solicitados*

${solicitationModel.exams
  .map(
    (exam) =>
      `
*Exame:* ${exam.Exams.name}
*Preparo*: ${exam.Exams.preparing}
`
  )
  .join(``)}

*Observações*: ${
    !solicitationModel.observation
      ? "Sem observações!"
      : solicitationModel.observation
  }

*Guia gerada com sucesso na R&K para o pet ${solicitationModel.pet.name}!*
Segue o link da Guia: *https://rkdiagnostico.cloud/solicitations/pdf/${pdfName}*

*Link para o WhatsApp do cliente:* https://api.whatsapp.com/send?phone=55${numberFormatted}&text=Olá%20${solicitationModel.pet.customer.name.replace(
    " ",
    "%20"
  )}%20aqui%20é%20a%20RK!%20Segue%20o%20link%20da%20guia%20do%20${
    solicitationModel.pet.name
  }:%20*https://rkdiagnostico.cloud/solicitations/pdf/${pdfName}*
`;
};
