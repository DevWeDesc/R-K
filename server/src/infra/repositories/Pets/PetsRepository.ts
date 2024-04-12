import { Pets } from "@prisma/client";
import { PetRequestDTO } from "../../../application/DTOs/PetsDTO/PetRequestDTO";
import { IPetsRepository } from "./IPetsRepository";
import { prisma } from "../../../lib/prismaClient";

export default class PetsRepository implements IPetsRepository {
  public async getPetByName(name: string): Promise<Pets[] | null> {
    return await prisma.pets.findMany({ where: { name: { contains: name } } });
  }

  public async getPetsByCustomer(customerId: number): Promise<Pets[] | []> {
    return await prisma.pets.findMany({
      where: { customerId },
      include: { customer: true },
    });
  }

  public async update(
    id: string | number,
    entity: PetRequestDTO
  ): Promise<Pets> {
    return await prisma.pets.update({
      where: { id: parseInt(id.toString()) },
      data: {
        customerId: entity.customerId,
        name: entity.name,
        specie: entity.specie,
      },
    });
  }

  public async findById(id: string | number): Promise<Pets | null> {
    return await prisma.pets.findUnique({
      where: { id: parseInt(id.toString()) },
    });
  }

  public async listAll(): Promise<Pets[] | null> {
    return await prisma.pets.findMany();
  }

  public async create(entity: PetRequestDTO): Promise<Pets> {
    return await prisma.pets.create({ data: entity });
  }

  public async delete(id: string | number): Promise<boolean> {
    await prisma.pets.delete({ where: { id: parseInt(id.toString()) } });
    return true;
  }
}
