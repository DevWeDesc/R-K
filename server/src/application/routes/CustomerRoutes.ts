import { FastifyInstance } from "fastify";
import { CustomersController } from "../controllers/CustomersController";

export async function customersRoutes(app: FastifyInstance) {
  app.post("/customers", CustomersController.CreateCustomer);
  app.get("/customers", CustomersController.GetAllCustomers);
  app.get("/customers/:id", CustomersController.GetCustomerById);
  app.put("/customers/:id", CustomersController.UpdatedCustomer);
  app.delete("/customers/:id", CustomersController.DeletedCustomer);
}
