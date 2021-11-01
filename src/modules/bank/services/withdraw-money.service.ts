import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepository } from '../repository/IAccountRepository';

@Injectable()
export class WithdrawMoneyService {
    constructor(
        @Inject('IAccountRepository')
        private readonly accountRepository: IAccountRepository,
    ) { }

    async execute() {

    }
}
