import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from '../infra/typeorm/repository/account.repository';
import { AccountRepositoryFake } from '../repository/fakes/AccountRepository.fake';
import { IAccountRepository } from '../repository/IAccountRepository';
import { WithdrawMoneyService } from './withdraw-money.service';

describe('WithdrawMoneyService', () => {
    let service: WithdrawMoneyService;
    let fakeAccountRepository: IAccountRepository = new AccountRepositoryFake();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WithdrawMoneyService, {
                provide: AccountRepository,
                useValue: fakeAccountRepository
            }],
        }).compile();

        service = module.get<WithdrawMoneyService>(WithdrawMoneyService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it.todo('should not withdraw amounts below 10')

    it.todo('should not withdraw amounts above 4000')

    it.todo('should be able to transfer between 6:00 am to 10:00 pm')

    it.todo('should not be able to transfer outside the 6:00 am and 10:00 pm range')
});
