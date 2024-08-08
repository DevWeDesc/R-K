import { ExamsProfileRequestDTO } from "../../../application/DTOs/ExamsProfileDTO/ExamsProfileRequestDTO";
import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class CreateExamsProfileUseCase {
  constructor(
    private readonly examsProfileRepository: IExamsProfileRepository
  ) {}

  async execute(examRequest: ExamsProfileRequestDTO) {
    const { name } = examRequest;

    const validationName = await this.examsProfileRepository.findByName(name);

    if (validationName)
      throw new Error("O Perfil de exame informado já existe!");

    const examsProfileCreated = await this.examsProfileRepository.create({
      name,
    });

    return examsProfileCreated;
  }
}
