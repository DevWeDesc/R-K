import DeleteVeterinarianUseCase from "../Veterinarians/DeleteVeterinarianUseCase";

export default class DeleteLoginUseCase {
  constructor(
    private readonly deleteVeterinarianUseCase: DeleteVeterinarianUseCase
  ) {}

  public async execute(idUser: number) {
    await this.deleteVeterinarianUseCase.execute(idUser);

    return;
  }
}
