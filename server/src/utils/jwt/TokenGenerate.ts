import { UsersLogin } from "@prisma/client";
import { Secret, sign } from "jsonwebtoken";
import VeterinarianRequestDTO from "../../application/DTOs/VeterinarianDTO/VeterinarianRequestDTO";

require("dotenv").config();

export default class TokenGenerate {
  constructor() {}

  async execute(user: UsersLogin, veterinarian: VeterinarianRequestDTO) {
    const { id, roleUser } = user;
    const { email, crmv, name } = veterinarian;

    const token = sign(
      { id, roleUser, email, crmv, name },
      process.env.SECRET as Secret,
      {
        expiresIn: "7d",
      }
    );

    return token;
  }
}
