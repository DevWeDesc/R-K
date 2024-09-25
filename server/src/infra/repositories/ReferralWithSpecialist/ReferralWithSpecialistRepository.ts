import { Customers, ReferralWithSpecialist } from "@prisma/client";
import { prisma } from "../../../lib/prismaClient";
import { IReferralWithSpecialistRepository } from "./IReferralWithSpecialistRepository";
import { ReferralWithSpecialistRequestDTO } from "../../../application/DTOs/ReferralWithSpecialist/ReferralWithSpecialistRequestDTO";

export default class ReferralWithSpecialistRepository
  implements IReferralWithSpecialistRepository
{
  public async update(
    id: string | number,
    entity: ReferralWithSpecialistRequestDTO
  ): Promise<ReferralWithSpecialist> {
    const referralWithSpecialistUpdated =
      await prisma.referralWithSpecialist.update({
        where: { id: id.toString() },
        data: entity,
      });
    return referralWithSpecialistUpdated;
  }
  public async findById(
    id: string | number
  ): Promise<ReferralWithSpecialist | null> {
    return await prisma.referralWithSpecialist.findUnique({
      where: { id: id.toString() },
    });
  }
  public async listAll(): Promise<ReferralWithSpecialist[] | null> {
    return await prisma.referralWithSpecialist.findMany();
  }
  public async create(
    entity: ReferralWithSpecialistRequestDTO
  ): Promise<ReferralWithSpecialist> {
    const referralWithSpecialistCreated =
      await prisma.referralWithSpecialist.create({
        data: entity,
      });
    return referralWithSpecialistCreated;
  }
  public async delete(id: string | number): Promise<boolean> {
    await prisma.referralWithSpecialist.delete({
      where: { id: id.toString() },
    });
    return true;
  }
}
