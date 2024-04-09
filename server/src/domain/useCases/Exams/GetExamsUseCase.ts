import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class GetExamsUseCase {
  constructor(readonly examsRepository: ExamsRepository) {}
  async execute(name?: string, id?: string) {
    if (name) return await this.examsRepository.getByName(name);
    if (id) return await this.examsRepository.findById(id);
    return await this.examsRepository.listAll();
  }
}
