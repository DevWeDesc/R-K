import test from "node:test";
import { createCustomerUseCase } from "../../../..";
import { CustomerRequestDTO } from "../../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import EmailAlreadyUsedError from "../../../errors/Customers/EmailAlreadyUsedError";
import EmailNotValidError from "../../../errors/Customers/EmailNotValidError";
import PhoneAlreadyUsedError from "../../../errors/Customers/PhoneAlreadyUsedError";

describe("Create Customer Tests", () => {
  test("Checks if the email is not valid", async () => {
    /*
     *Se o email não tiver o formato valido como por
     *exemplo emailvalido@example.com o erro EmailNotValid é dispardo
     *fazendo a validação do cadastro
     */
    const data: CustomerRequestDTO = {
      cpf: "",
      name: "Vinicius",
      email: "vinicius@example",
      phone: "(11) 99999-9990",
    };

    await expect(createCustomerUseCase.execute(data)).rejects.toThrow(
      EmailNotValidError
    );
  });

  test("Check existing email", async () => {
    /*
     *Se o email já estiver cadastrado no sistema
     *o erro EmailAlreadyUSed é disparado fazendo a validação do cadastro
     */
    const data: CustomerRequestDTO = {
      cpf: "",
      name: "Vinicius",
      email: "vinicius@gmail.com",
      phone: "(11) 90000-0000",
    };

    expect(await createCustomerUseCase.execute(data)).rejects.toThrow(
      EmailAlreadyUsedError
    );
  });

  test("Check existing phone", async () => {
    /*
     *Se o telefone já estiver cadastrado no sistema
     *o erro PhoneAlreadyUsed é disparado fazendo a validação do cadastro
     */
    const data: CustomerRequestDTO = {
      cpf: "",
      name: "Exists Phone",
      email: "existsPhone@gmail.com",
      phone: "(11) 99999-9999",
    };

    expect(await createCustomerUseCase.execute(data)).rejects.toThrow(
      PhoneAlreadyUsedError
    );
  });
});
