import { HttpModule, Module } from '@nestjs/common';
import { CreateCustomerService } from './services/create-customer.service';
import { OpenAccountService } from './services/open-account.service';
import { CustomerController } from './controllers/customer.controller';
import { CloseAccountService } from './services/close-account.service';
import { WithdrawMoneyService } from './services/withdraw-money.service';
import { TransferService } from './services/transfer.service';
import { AccountRepository } from './infra/typeorm/repository/account.repository';
import { CustomersRepository } from './infra/typeorm/repository/customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './infra/typeorm/models/customer.entity';
import { Account } from './infra/typeorm/models/account.entity';
import { SerasaHttpRepository } from './infra/http/repository/serasa_http.repository';
import { SerasaGrpcRepository } from './infra/grpc/repository/serasa_grpc.repository';
import { AccountRepositoryFake } from './repository/fakes/AccountRepository.fake';
import { TransferGrpcRepository } from './infra/grpc/repository/transfer_grpc.repository';

@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Customer, Account])],
    providers: [
        CreateCustomerService,
        OpenAccountService,
        CloseAccountService,
        WithdrawMoneyService,
        TransferService,
        {
            provide: 'IAccountRepository',
            useValue: AccountRepository
        },
        {
            provide: 'ICustomerRepository',
            useValue: CustomersRepository
        },
        {
            provide: 'ISerasaRepository',
            useClass: process.env.GPRC != null ? SerasaGrpcRepository : SerasaHttpRepository,
        },
        {
            provide: 'ITransferRepository',
            useClass: TransferGrpcRepository
        }
    ],
    controllers: [CustomerController],
})
export class BankModule { }
