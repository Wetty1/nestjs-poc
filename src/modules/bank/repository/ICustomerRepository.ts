import { IBaseRepository } from 'src/shared/interfaces/IBaseRepository';
import { Customer } from '../infra/typeorm/models/customer.entity';

export interface ICustomerRepository extends IBaseRepository<Customer> {
    findByCPF(cpf: string): Promise<Customer>;
}
