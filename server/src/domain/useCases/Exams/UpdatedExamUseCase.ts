import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class UpdateExamUseCase {
  constructor(readonly examsRepository: ExamsRepository) {}

  public async execute(idExam: number, examRequest: ExamsRequestDTO) {
    const idExamIsValid = await this.examsRepository.findById(idExam);

    if (!idExamIsValid) throw new Error("Exame inválido!");

    const { groupId, name, value, deadline, typeExam } = examRequest;

    await this.examsRepository.update(idExam, {
      name,
      value,
      groupId,
      deadline,
      typeExam,
    });
    return { message: "Exame atualizado com sucesso!" };
  }
}
