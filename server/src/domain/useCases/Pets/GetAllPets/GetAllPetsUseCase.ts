import PetsRepository from "../../../../infra/repositories/Pets/PetsRepository";

export default class GetAllPetsUseCase {
  constructor(readonly petsRepository: PetsRepository) {}
  async execute() {
    return await this.petsRepository.listAll();
  }
}
