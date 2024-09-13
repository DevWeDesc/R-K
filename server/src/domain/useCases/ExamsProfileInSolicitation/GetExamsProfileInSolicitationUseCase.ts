import ExamsProfileInSolicitationRepository from "../../../infra/repositories/ExamsProfileInSolicitation/ExamsProfileInSolicitationRepository";

export default class GetExamsProfileInSolicitationUseCase {
  constructor(
    private readonly examProfileInSolicitationRepository: ExamsProfileInSolicitationRepository
  ) {}

  public async execute() {
    try {
      return await this.examProfileInSolicitationRepository.listAll(null);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
