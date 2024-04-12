import { updatedCustomerUseCase } from "../../../..";
import { CustomerRequestDTO } from "../../../../application/DTOs/CustomersDTO/CustomersRequestDTO";
import EmailAlreadyUsedError from "../../../errors/Customers/EmailAlreadyUsedError";

describe("UpdatedCustomer Test", () => {
  test("Validation Email Exists", async () => {
    const data: CustomerRequestDTO = {
      name: "Dr. Daniel",
      email: "draniel@gmail.com",
      phone: "(11) 99999-9998",
    };

    await expect(updatedCustomerUseCase.execute(1, data)).rejects.toThrow(
      EmailAlreadyUsedError
    );
  });
});
