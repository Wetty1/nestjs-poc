import {
    BadRequestException,
    HttpException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PersonGrpcRepository } from '../infra/grpc/person_grpc.repository';
import { SerasaHttpRepository } from '../infra/http/repository/serasa_http.repository';
import { Customer } from '../infra/typeorm/models/customer.entity';
import { ICustomerRepository } from '../repository/ICustomerRepository';

@Injectable()
export class CreateCustomerService {
    constructor(
        @Inject('CustomersRepository')
        private readonly customerRepository: ICustomerRepository,
        private readonly personGrpcRepository: PersonGrpcRepository,
    ) {}

    async execute(data: Partial<Customer>) {
        const person = await this.personGrpcRepository.findByDocument(data.cpf);

        console.log(person);

        if (!person) throw new NotFoundException('Person not found');
        if (person.dirty_name) throw new HttpException('Name is dirty', 402);

        const customerExists = await this.customerRepository.findByCPF(
            data.cpf,
        );

        if (customerExists) throw new BadRequestException('Customer exists');

        return this.customerRepository.create(data);
    }
}
