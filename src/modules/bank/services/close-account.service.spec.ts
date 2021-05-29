import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from '../infra/typeorm/repository/account.repository';
import { AccountRepositoryFake } from '../repository/fakes/AccountRepository.fake';
import { IAccountRepository } from '../repository/IAccountRepository';
import { CloseAccountService } from './close-account.service';

describe('CloseAccountService', () => {
    let service: CloseAccountService;
    let fakeAccountRepository: IAccountRepository = new AccountRepositoryFake();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CloseAccountService,
                {
                    provide: AccountRepository,
                    useValue: fakeAccountRepository
                }
            ],
        }).compile();

        service = module.get<CloseAccountService>(CloseAccountService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it.todo('should not be closed account when money exists')

});
