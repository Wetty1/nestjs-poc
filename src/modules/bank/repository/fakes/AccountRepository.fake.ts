import { Account } from '../../infra/typeorm/models/account.entity';
import { IAccountRepository } from '../IAccountRepository';

export class AccountRepositoryFake implements IAccountRepository {
  accounts: Account[] = [];

  async findByCustomer(customer_id: number): Promise<Account[]> {
    return this.accounts.filter(
      (account) => account.customer_id === customer_id,
    );
  }
  async find(): Promise<Account[]> {
    return this.accounts;
  }
  async findById(id: number): Promise<Account> {
    return this.accounts.find((account) => account.id === id);
  }
  async create(data: Partial<Account>): Promise<Account> {
    const newAccount: Account = {
      id: Math.random() * 10000,
      ...data,
    } as Account;

    this.accounts.push(newAccount);

    return newAccount;
  }
  async update(id: number, data: Partial<Account>): Promise<Account> {
    const findedIndex = this.accounts.findIndex((account) => account.id === id);

    const accountUpdated = {
      ...this.accounts[findedIndex],
      ...data,
    } as Account;

    return accountUpdated;
  }
  async delete(id: number): Promise<Account> {
    const findedIndex = this.accounts.findIndex((account) => account.id === id);
    const accountDeleted = this.accounts[findedIndex];
    this.accounts.splice(findedIndex, 1);
    return accountDeleted;
  }
}
