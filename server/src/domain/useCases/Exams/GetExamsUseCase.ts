import { QueryParamsListAllExams } from "../../../application/DTOs/ExamsDTO/QueryParamsListAllExams";
import ExamsRepository from "../../../infra/repositories/Exams/ExamsRepository";

export default class GetExamsUseCase {
  constructor(readonly examsRepository: ExamsRepository) {}
  async execute(queryParams: QueryParamsListAllExams & { id?: string }) {
    const { name, pageActual, id } = queryParams;

    if (id) return await this.examsRepository.findById(id);

    let exams = await this.examsRepository.listAll(queryParams);

    let numberPages: number =
      (await this.examsRepository.countExams(name)) / 10;

    // if (name) {
    //   exams = await this.examsRepository.getByName(name, pageActual);
    //   numberPages = (await this.examsRepository.countExams(name)) / 10;
    //   return { exams, pageActual, numberPages };
    // }

    return { exams, pageActual, numberPages };
  }
}
