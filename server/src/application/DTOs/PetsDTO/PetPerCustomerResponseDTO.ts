import { Customers, Pets } from "@prisma/client";

export interface PetPerCustomerResponseDTO {
  customer: Customers;
  pets: Pets[];
}
