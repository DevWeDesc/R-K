import { IExamsRepository } from "../../../infra/repositories/Exams/IExamsRepository";
import { ExamTypeEnum } from "../../enums/ExamTypeEnum";
import { prisma } from "../../../lib/prismaClient";
import { GetAllExamsWithTypeResponse } from "../../../application/DTOs/ExamsDTO/GetAllExamsWithTypeResponse";

export default class GetAllExamsWithTypeUseCase {
  constructor(private readonly examsRepository: IExamsRepository) {}
  async execute(): Promise<GetAllExamsWithTypeResponse> {
    return prisma.$transaction(async () => {
      const hematology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.HEMATOLOGIA
      );
      const biochemistry = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.BIOQUIMICA_CLINICA
      );
      const urine = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.URINA
      );
      const feces = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.FEZES
      );
      const microbiology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.MICROBIOLOGIA
      );
      const dermatology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.DERMATOLOGIA
      );
      const hormones = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.HORMONIOS
      );
      const pathology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.PATOLOGIA
      );
      const pathologySecondPart = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.PATOLOGIA_SEGUNDA_PARTE
      );
      const immunology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.IMUNOLOGIA
      );
      const molecularBiology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.BIOLOGIA_MOLECULAR
      );
      const cardiology = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.CARDIOLOGIA
      );
      const ultrasound = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.ULTRASSONOGRAFIA
      );

      const not_defined = await this.examsRepository.findByTypeExam(
        ExamTypeEnum.NOT_DEFINED
      );

      const data: GetAllExamsWithTypeResponse = {
        hematology,
        biochemistry,
        urine,
        feces,
        microbiology,
        dermatology,
        hormones,
        pathology,
        pathologySecondPart,
        immunology,
        molecularBiology,
        cardiology,
        ultrasound,
        not_defined,
      };

      return data;
    });
  }
}
