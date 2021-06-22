import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Account } from '../infra/typeorm/models/account.entity';
import { IAccountRepository } from '../repository/IAccountRepository';

@Injectable()
export class CloseAccountService {
    constructor(
        @Inject('AccountRepository')
        private readonly accountRepository: IAccountRepository,
    ) {}

    async execute(data: Partial<Account>): Promise<Account> {
        const account = await this.accountRepository.findById(data.id);
        if (!account) throw new NotFoundException('Account not found');
        if (account.amount > 0) throw new Error('Account has money');
        await this.accountRepository.delete(data.id);
        return account;
    }
}
