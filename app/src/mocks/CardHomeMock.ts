import { ICardHome } from "@/@interfaces/ICardHome";

export const CardHomeMock: ICardHome[] = [
  {
    title: "Solicitar Exames",
    description:
      "Descubra uma variedade de exames veterinários disponíveis para ajudar a manter a saúde e o bem-estar dos seus animais de estimação. Desde exames de rotina até procedimentos mais especializados, estamos aqui para oferecer suporte completo.",
    LinkButton: "/exams/available",
    TextButton: "Visualizar Exames Disponíveis",
    OpenModal: true,
  },
  {
    title: "Cadastrar Exames",
    description:
      "Descubra uma variedade de exames veterinários disponíveis para ajudar a manter a saúde e o bem-estar dos seus animais de estimação. Desde exames de rotina até procedimentos mais especializados, estamos aqui para oferecer suporte completo.",
    LinkButton: "/exams/admin",
    TextButton: "Cadastrar Exames",
    Role: "Admin",
  },
];
