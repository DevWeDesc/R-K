export interface IGenericRepository<T, TP> {
  update(id: number | string, entity: T): Promise<TP>;
  findById(id: number | string): Promise<TP | null>;
  listAll(): Promise<TP[] | null>;
  create(entity: T): Promise<TP>;
  delete(id: number | string): Promise<boolean>;
}
