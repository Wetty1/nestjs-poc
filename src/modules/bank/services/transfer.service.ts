import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepository } from '../repository/IAccountRepository';

@Injectable()
export class TransferService {
    constructor(
        @Inject('AccountRepository')
        private readonly accountRepository: IAccountRepository,
    ) { }

    async execute() {

    }
}
