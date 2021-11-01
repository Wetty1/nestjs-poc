import { InjectRepository } from "@nestjs/typeorm";
import { ICustomerRepository } from "../../../repository/ICustomerRepository";
import { Repository } from "typeorm";
import { Customer } from "../models/customer.entity";


export class CustomersRepository implements ICustomerRepository {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { }
    findByCPF(cpf: string): Promise<Customer> {
        return this.customerRepository.findOne({ where: { cpf } });
    }

    async find(): Promise<Customer[]> {
        return this.customerRepository.find();
    }
    async findById(id: number): Promise<Customer> {
        return this.customerRepository.findOne(id);
    }
    async create(data: Partial<Customer>): Promise<Customer> {
        return this.customerRepository.save(data);
    }
    async update(id: number, data: Partial<Customer>): Promise<Customer> {
        const customer = await this.customerRepository.findOne(id);
        const newCustomer = {
            ...customer,
            ...data,
        } as Customer;

        return newCustomer;
    }
    async delete(id: number): Promise<Customer> {
        const customer = await this.customerRepository.findOne(id);
        await this.customerRepository.delete(id);
        return customer;
    }

}