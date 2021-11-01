import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepository } from '../repository/IAccountRepository';
import { ITransferRepository } from '../repository/ITransferRepository';

@Injectable()
export class TransferService {
    constructor(
        @Inject('IAccountRepository')
        private readonly accountRepository: IAccountRepository,
        @Inject('ITransferRepository')
        private readonly transferRepository: ITransferRepository,
    ) { }

    async execute(data) {
        await this.transferRepository.transferTo({
            id_client: 1,
            cpf_client_target: '999444411111',
            value_to_transfer: 11299,
        })
    }
}
