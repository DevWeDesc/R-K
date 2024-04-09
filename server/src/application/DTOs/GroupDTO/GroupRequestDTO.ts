import { JsonObject } from "@prisma/client/runtime/library";

export interface IGroupRequestDTO {
  name: string;
  preparing: JsonObject;
}
