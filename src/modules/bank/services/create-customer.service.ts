import { HttpService, Inject, Injectable } from '@nestjs/common';
import { Customer } from '../infra/typeorm/models/customer.entity';
import { ICustomerRepository } from '../repository/ICustomerRepository';

@Injectable()
export class CreateCustomerService {
    constructor(
        @Inject('CustomersRepository')
        private readonly customerRepository: ICustomerRepository,
        private readonly httpService: HttpService,
    ) { }

    async execute(data: Partial<Customer>) {
        const responseSerasa = await this.httpService.get(`http://localhost:3001/person?cpf=${data.cpf}`).toPromise()
        const dataRes = responseSerasa.data[0];
        console.log(dataRes)
        if (dataRes.dirty_name)
            return { "mensage": "Name is dirty" }


        // TODO: checks whether cpf exists in the database
        const customerExists = await this.customerRepository.findByCPF(data.cpf);

        if (customerExists) throw new Error("Customer exists")

        return this.customerRepository.create(data);

    }
}
