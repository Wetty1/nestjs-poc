import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from '../infra/typeorm/repository/account.repository';
import { AccountRepositoryFake } from '../repository/fakes/AccountRepository.fake';
import { IAccountRepository } from '../repository/IAccountRepository';
import { TransferService } from './transfer.service';

describe('TransferService', () => {
    let service: TransferService;
    let fakeAccountRepository: IAccountRepository = new AccountRepositoryFake();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TransferService, {
                provide: AccountRepository,
                useValue: fakeAccountRepository
            }],
        }).compile();

        service = module.get<TransferService>(TransferService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it.todo('should not transfer amounts below 10')

    it.todo('should not transfer amounts above 4000')


});
