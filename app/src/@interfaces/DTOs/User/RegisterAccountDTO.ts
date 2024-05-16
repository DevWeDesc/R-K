export interface IRegisterAccountDTO {
  LoginRequestDTO: {
    password: string;
    roleUser: string;
  };
  VeterinarianRequestDTO: {
    name: string;
    crmv: string;
    email: string;
    state: string;
    phone: string;
  };
}
