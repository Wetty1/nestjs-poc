import { Test, TestingModule } from '@nestjs/testing';
import { CustomerRepository } from '../infra/typeorm/repository/customer.repository';
import { CustomerRepositoryFake } from '../repository/fakes/CustomerRepository.fake';
import { ICustomerRepository } from '../repository/ICustomerRepository';
import { CreateCustomerService } from './create-customer.service';

describe('CreateCustomerService', () => {
    let service: CreateCustomerService;
    let fakeCustomerRepository: ICustomerRepository = new CustomerRepositoryFake();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateCustomerService,
                {
                    provide: CustomerRepository,
                    useValue: fakeCustomerRepository,
                }
            ],
        }).compile();

        service = module.get<CreateCustomerService>(CreateCustomerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it.todo('should be able not create when customer have dirty name')
});
