import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from '../infra/typeorm/repository/account.repository';
import { AccountRepositoryFake } from '../repository/fakes/AccountRepository.fake';
import { IAccountRepository } from '../repository/IAccountRepository';
import { OpenAccountService } from './open-account.service';

describe('OpenAccountService', () => {
    let service: OpenAccountService;
    let fakeAccountRepository: IAccountRepository = new AccountRepositoryFake();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OpenAccountService, {
                provide: AccountRepository,
                useValue: fakeAccountRepository
            }],
        }).compile();

        service = module.get<OpenAccountService>(OpenAccountService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it.todo('should not be created when one of the same type already exists');
});
