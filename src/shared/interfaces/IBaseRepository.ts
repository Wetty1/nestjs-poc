export interface IBaseRepository<T> {
    find(): Promise<T[]>;
    findById(): Promise<T>;
    create(): Promise<T>;
    update(): Promise<T>;
    delete(): Promise<T>;
}