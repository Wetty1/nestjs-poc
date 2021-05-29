import { Inject, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repository/ICustomerRepository';

@Injectable()
export class CreateCustomerService {
    constructor(
        @Inject('CustomerRepository')
        private readonly customerRepository: ICustomerRepository,
    ) { }

    async execute() {

    }
}
