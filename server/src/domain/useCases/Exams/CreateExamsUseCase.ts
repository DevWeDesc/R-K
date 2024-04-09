import { Exams } from "@prisma/client";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class CreateExamsUseCase {
  constructor(readonly examsRepository: ExamsRepository) {}
  async execute(examRequest: ExamsRequestDTO) {
    const { groupId, name, value } = examRequest;
    const validationName: Exams[] = await this.examsRepository.getByName(
      examRequest.name
    );

    if (validationName.length > 0)
      throw new Error("O Exame informado já existe!");
    await this.examsRepository.create({ name, groupId, value });
  }
}
