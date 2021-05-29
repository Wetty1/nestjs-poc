import { Customer } from '../../infra/typeorm/models/customer.entity';
import { ICustomerRepository } from '../ICustomerRepository';

export class CustomerRepositoryFake implements ICustomerRepository {
  customers: Customer[] = [];

  async find(): Promise<Customer[]> {
    return this.customers;
  }
  async findById(id: number): Promise<Customer> {
    return this.customers.find((customer) => customer.id === id);
  }
  async create(data: Partial<Customer>): Promise<Customer> {
    const newCustomer: Customer = {
      id: Math.random() * 10000,
      ...data,
    } as Customer;

    this.customers.push(newCustomer);

    return newCustomer;
  }
  async update(id: number, data: Partial<Customer>): Promise<Customer> {
    const findedIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    const customerUpdated = {
      ...this.customers[findedIndex],
      ...data,
    } as Customer;

    this.customers[findedIndex] = customerUpdated;

    return this.customers[findedIndex];
  }
  async delete(id: number): Promise<Customer> {
    const findedIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    const customerDeleted = this.customers[findedIndex];
    this.customers.splice(findedIndex, 1);
    return customerDeleted;
  }
}
