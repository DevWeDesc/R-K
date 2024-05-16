import { FormatedDate } from "../../../utils/FormatedDate";
import { SolicitationModel } from "../../models/Solicitation";

export const FormatterMessageFromWhatsApp = (
  solicitationModel: SolicitationModel,
  pdfName: string
): string => {
  return `
*Nome do Tutor*: ${solicitationModel.pet.customer.name}
*Data e Hora*: ${FormatedDate(new Date(), "short", "medium")}
*CPF*: ${solicitationModel.pet.customer.cpf}
*E-mail*: ${solicitationModel.pet.customer.email}

*Dados do Pet*
*Nome*: ${solicitationModel.pet.name}        *Espécie*: ${
    solicitationModel.pet.specie
  }
*Idade*: ${solicitationModel.pet.age}        *Sexo do animal*: ${
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
`;
};
