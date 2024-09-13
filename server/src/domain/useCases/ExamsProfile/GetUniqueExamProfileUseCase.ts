import { IExamsProfileRepository } from "../../../infra/repositories/ExamsProfile/IExamsProfileRepository";

export default class GetUniqueExamProfileUseCase {
  constructor(
    private readonly examsProfileRepository: IExamsProfileRepository
  ) {}

  public async execute(id: string) {
    const examProfileById = await this.examsProfileRepository.findById(id);
    if (!examProfileById)
      throw new Error("Perfil de exame informado não existe!");

    return examProfileById;
  }
}
