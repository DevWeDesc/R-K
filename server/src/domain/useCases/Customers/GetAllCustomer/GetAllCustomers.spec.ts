import { getAllCustomersUseCase } from "../../../..";

describe("GetAllCustomers", () => {
  test("validation List", async () => {
    expect(await getAllCustomersUseCase.execute()).toBe.length >= 0;
  });
});
