import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import { IExamsRepository } from "../../../infra/repositories/Exams/IExamsRepository";

export default class CreateExamsUseCase {
  constructor(private readonly examsRepository: IExamsRepository) {}

  async execute(examRequest: ExamsRequestDTO) {
    const { deadline, name, value, typeExam } = examRequest;

    const validationName = await this.examsRepository.findByName(name);

    if (validationName) throw new Error("O Exame informado já existe!");

    const examCreated = await this.examsRepository.create({
      deadline,
      name,
      value,
      typeExam,
    });

    return examCreated;
  }
}
