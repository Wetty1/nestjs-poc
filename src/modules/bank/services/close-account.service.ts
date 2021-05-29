import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../infra/typeorm/models/account.entity';
import { IAccountRepository } from '../repository/IAccountRepository';

@Injectable()
export class CloseAccountService {
    constructor(
        @Inject('AccountRepository')
        private readonly accountRepository: IAccountRepository,
    ) { }

    async execute(data: Partial<Account>): Promise<Account> {
        return this.accountRepository.create(data);
    }
}
