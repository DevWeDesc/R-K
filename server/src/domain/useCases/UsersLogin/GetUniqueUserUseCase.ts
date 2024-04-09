interface IGetUniqueUserUseCase {
  execute(id: number): Promise<string>;
}

export class GetUniqueUserUseCase implements IGetUniqueUserUseCase {
  constructor() {}
  public async execute(id: number): Promise<string> {
    return "id";
  }
}
