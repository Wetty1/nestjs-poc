import { Logger } from "@nestjs/common";
import { IAccountRepository } from "../../../repository/IAccountRepository";
import { DeleteResult, Repository } from "typeorm";
import { Account } from "../models/account.entity";

export class AccountRepository implements IAccountRepository {
    constructor(
        private readonly accountRepository: Repository<Account>
    ) { }

    private logger: Logger = new Logger(AccountRepository.name);

    async findByCustomer(customer_id: number): Promise<Account[]> {
        try {
            return this.accountRepository.find();
        } catch (error) {
            this.logger.error(error);
        }
    }
    async find(): Promise<Account[]> {
        try {
            return this.accountRepository.find();
        } catch (error) {
            this.logger.error(error);
        }
    }
    async findById(id: number): Promise<Account> {
        try {
            return this.accountRepository.findOne({ where: { id } });
        } catch (error) {
            this.logger.error(error);
        }
    }
    async create(data: Account): Promise<Account> {
        try {
            let newAccount = this.accountRepository.create(data);
            newAccount = await this.accountRepository.save(newAccount);
            return newAccount;
        } catch (error) {
            this.logger.error(error);
        }
    }
    async update(id: number, data: Account): Promise<Account> {
        try {
            const account = await this.accountRepository.findOne(id);

            const accountUpdated = {
                ...account,
                ...data,
            };

            return accountUpdated;
        } catch (error) {
            this.logger.error(error);
        }

    }
    async delete(id: number): Promise<Account> {
        try {
            const account = await this.accountRepository.findOne(id);
            await this.accountRepository.delete(account.id);
            return account;
        } catch (error) {
            this.logger.error(error);
        }
    }


}