import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepository } from '../repository/IAccountRepository';

@Injectable()
export class OpenAccountService {
    constructor(
        @Inject('AccountRepository')
        private readonly accountRepository: IAccountRepository,
    ) { }

    async execute() {

    }
}
