export interface IGenericRepository<T, TP> {
  update(id: number | string, entity: any): Promise<TP>;
  findById(id: number | string): Promise<TP | null>;
  listAll(queryStrings: any): Promise<TP[] | null>;
  create(entity: T): Promise<TP>;
  delete(id: number | string): Promise<boolean>;
}
