import { VeterinarianNotFound } from "../../..";
import { VeterinarianRepository } from "../../../infra/repositories/Veterinarian/VeterinarianRepository";

export default class GetAllVeterinariansUseCase {
  constructor(readonly veterinarianRepository: VeterinarianRepository) {}
  async execute(email?: string, crmv?: string, id?: string) {
    switch (true) {
      case !!email:
        return await this.veterinarianRepository
          .getByEmail(email)
          .then((res) => {
            if (!res) throw new VeterinarianNotFound();
            return res;
          });
      case !!crmv:
        return await this.veterinarianRepository.getByCRMV(crmv).then((res) => {
          if (!res) throw new VeterinarianNotFound();
          return res;
        });
      case !!id:
        return await this.veterinarianRepository
          .findById(parseInt(id))
          .then((res) => {
            if (!res) throw new VeterinarianNotFound();
            return res;
          });
    }

    return await this.veterinarianRepository.listAll();
  }
}
