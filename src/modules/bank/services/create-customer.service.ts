import {
    BadRequestException,
    HttpException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Customer } from '../infra/typeorm/models/customer.entity';
import { ICustomerRepository } from '../repository/ICustomerRepository';
import { ISerasaRepository } from '../repository/ISerasaRepository';

@Injectable()
export class CreateCustomerService {
    constructor(
        @Inject('ICustomerRepository')
        private readonly customerRepository: ICustomerRepository,
        @Inject('ISerasaRepository')
        private readonly personRepository: ISerasaRepository,
    ) { }

    async execute(data: Partial<Customer>) {
        const person = await this.personRepository.findByDocument(data.cpf);

        console.log('resposta: ', person);

        if (!person) throw new NotFoundException('Person not found');
        if (person.score == 0) throw new HttpException('Name is dirty', 402);

        const customerExists = await this.customerRepository.findByCPF(
            data.cpf,
        );

        if (customerExists) throw new BadRequestException('Customer exists');

        return this.customerRepository.create({
            ...data,
            birthdate: new Date(data.birthdate),
        });
    }
}
