import { IBaseRepository } from 'src/shared/interfaces/IBaseRepository';
import { Customer } from '../infra/typeorm/models/customer.entity';

export type ICustomerRepository = IBaseRepository<Customer>;
