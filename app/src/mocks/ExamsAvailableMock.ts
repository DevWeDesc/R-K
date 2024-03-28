import { IListExams } from "@/@interfaces/IExams";

export const ExamsVailableMock: IListExams = {
  headerTable: ["Nome do Exame", "Preço do Exame"],
  exams: [
    { id: 0, name: "Hemograma Canino Filhote", price: 60 },
    { id: 1, name: "Hemograma Felino", price: 60 },
    { id: 2, name: "Hemograma Canino Adulto", price: 60 },
    { id: 3, name: "Ureia e Creatina", price: 55 },
    { id: 4, name: "ECG", price: 165 },
    { id: 5, name: "Parasitologico de Fezes", price: 35 },
    { id: 6, name: "Cinomose", price: 95 },
    { id: 7, name: "Dirofilariose", price: 130 },
  ],
};
