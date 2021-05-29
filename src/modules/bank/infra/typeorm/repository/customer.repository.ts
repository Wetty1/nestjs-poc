import { ICustomerRepository } from "src/modules/bank/repository/ICustomerRepository";
import { Repository } from "typeorm";
import { Customer } from "../models/customer.entity";


export class CustomerRepository implements ICustomerRepository {
    constructor(
        private readonly customerRepository: Repository<Customer>,
    ) { }

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