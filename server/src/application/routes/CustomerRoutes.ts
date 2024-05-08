import { FastifyInstance } from "fastify";
import { CustomersController } from "../controllers/CustomersController";
import { AuthMiddleware } from "../middlewares/Auth";

export async function customersRoutes(app: FastifyInstance) {
  app.post(
    "/customers",
    {
      preHandler: AuthMiddleware,
    },
    CustomersController.CreateCustomer
  );
  app.get(
    "/customers",
    {
      preHandler: AuthMiddleware,
    },
    CustomersController.GetAllCustomers
  );
  app.get(
    "/customers/:id",
    {
      preHandler: AuthMiddleware,
    },
    CustomersController.GetCustomerById
  );
  app.put(
    "/customers/:id",
    {
      preHandler: AuthMiddleware,
    },
    CustomersController.UpdatedCustomer
  );
  app.delete(
    "/customers/:id",
    {
      preHandler: AuthMiddleware,
    },
    CustomersController.DeletedCustomer
  );
}
