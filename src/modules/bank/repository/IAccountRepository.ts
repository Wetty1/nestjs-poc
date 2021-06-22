import { IBaseRepository } from 'src/shared/interfaces/IBaseRepository';
import { Account } from '../infra/typeorm/models/account.entity';

export interface IAccountRepository extends IBaseRepository<Account> {
    findByCustomer(customer_id: number): Promise<Account[]>;
}
