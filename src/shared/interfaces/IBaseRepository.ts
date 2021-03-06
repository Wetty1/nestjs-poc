export interface IBaseRepository<T> {
    find(): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(data: Partial<T>): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T>;
    delete(id: number): Promise<T>;
}