export interface IClient {
  email: string;
  name: string;
  phone: string;
  pets?: string[];
}

export const ClientsMock: IClient[] = [
  {
    email: "cliente@gmail.com",
    name: "cliente teste",
    phone: "(11) 99999-9999",
    pets: ["Luna", "Mel"],
  },
  {
    email: "danilo@gmail.com",
    name: "Danilo Scalia",
    phone: "(11) 91111-1111",
    pets: ["Luna", "Mel"],
  },
];
