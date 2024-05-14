import { Exams } from "@prisma/client";
import { ExamsRequestDTO } from "../../../application/DTOs/ExamsDTO/ExamsRequestDTO";
import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";
import { prisma } from "../../../lib/prismaClient";
import { GeneratedID } from "../../../utils/GeneratedID";

export default class CreateExamsUseCase {
  constructor(readonly examsRepository: ExamsRepository) {}
  async execute(examRequest: ExamsRequestDTO) {
    const { deadline, name, value } = examRequest;

    const validationName: Exams[] = await this.examsRepository.getByName(
      examRequest.name,
      1
    );

    if (validationName.length > 0)
      throw new Error("O Exame informado já existe!");

    const allExams = await this.examsRepository.listAll();

    let idGenerated = GeneratedID(1000, 100000);

    allExams?.find((exam) =>
      exam.id === idGenerated ? (idGenerated = GeneratedID(1000, 100000)) : null
    );

    await this.examsRepository.create({
      id: idGenerated,
      deadline,
      name,
      value,
    });

    return "Exame criado com sucesso!";
  }
}
