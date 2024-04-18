import { Veterinarians } from "@prisma/client";
import { IVeterinarianRepository } from "./IVeterinarianRepository";
import { IVeterinarianModel } from "../../../domain/models/Veterinarian";
import { prisma } from "../../../lib/prismaClient";

export class VeterinarianRepository implements IVeterinarianRepository {
  public async getSolicitationsByVeterinarian(): Promise<IVeterinarianModel[]> {
    return await prisma.veterinarians.findMany({
      include: {
        solicitations: { include: { pet: { include: { customer: true } } } },
        _count: true,
      },
    });
  }

  public async listAll(): Promise<Veterinarians[]> {
    return await prisma.veterinarians.findMany();
  }

  public async getByEmail(email: string): Promise<IVeterinarianModel | null> {
    const getUserByEmail = await prisma.veterinarians.findUnique({
      where: { email },
      include: { veterinarianLogin: true },
    });

    return getUserByEmail;
  }

  public async getByCRMV(crmv: string): Promise<IVeterinarianModel | null> {
    const getUserByCRMV = await prisma.veterinarians.findUnique({
      where: { crmv },
    });

    return getUserByCRMV;
  }

  public async update(
    id: string | number,
    entity: Veterinarians
  ): Promise<Veterinarians> {
    const vetById = await this.findById(id);
    if (!vetById) throw new Error("O Veterinário informado não existe!!");

    const vetAttualized = await prisma.veterinarians.update({
      where: { id: parseInt(id.toString()) },
      data: entity,
    });

    return vetAttualized;
  }

  public async findById(id: string | number): Promise<Veterinarians | null> {
    const vetById = await prisma.veterinarians.findUnique({
      where: { id: parseInt(id.toString()) },
    });

    return vetById;
  }
  public async create(entity: IVeterinarianModel): Promise<Veterinarians> {
    const { crmv, email, name, phone, state, usersLoginId } = entity;
    const veterinarianCreated = await prisma.veterinarians.create({
      data: { crmv, email, name, phone, state, usersLoginId },
    });

    return veterinarianCreated;
  }

  public async delete(id: string | number): Promise<boolean> {
    try {
      await prisma.veterinarians.delete({
        where: { id: parseInt(id.toString()) },
      });
      return true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
