import { getAllCustomersUseCase, getUniqueCustomerUseCase } from "../../../..";
import { UniqueCustomerEmailPhoneDTO } from "../../../../application/DTOs/CustomersDTO/UniqueCustomerEmailPhoneDTO";
import CustomerNotFoundError from "../../../errors/Customers/CustomerNotFoundError";

describe("GetUniqueUser", () => {
  test("Validation Customer Not Found", async () => {
    await expect(getUniqueCustomerUseCase.getcustomerById(0)).rejects.toThrow(
      CustomerNotFoundError
    );
  });

  test("Find user by Id", async () => {
    const userId = 1;
    await expect(
      getUniqueCustomerUseCase.getcustomerById(userId)
    ).resolves.toMatchObject({
      id: userId,
      name: "Vinicius",
      email: "vinicius@gmail.com",
      phone: "(11) 99999-9999",
    });
  });

  test("Find user by Email", async () => {
    const data: UniqueCustomerEmailPhoneDTO = {
      email: "draniel@gmail.com",
    };
    await expect(getAllCustomersUseCase.execute(data)).resolves.toMatchObject({
      id: 2,
      name: "Daniel",
      email: "draniel@gmail.com",
      phone: "(11) 99999-9998",
    });
  });

  test("Find user by Phone", async () => {
    const data: UniqueCustomerEmailPhoneDTO = {
      phone: "(11) 99999-9999",
    };
    await expect(getAllCustomersUseCase.execute(data)).resolves.toMatchObject({
      id: 1,
      name: "Vinicius",
      email: "vinicius@gmail.com",
      phone: "(11) 99999-9999",
    });
  });
});
