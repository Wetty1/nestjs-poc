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

@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Customer, Account])],
    providers: [CreateCustomerService, OpenAccountService, CloseAccountService, WithdrawMoneyService, TransferService, AccountRepository, CustomersRepository],
    controllers: [CustomerController],
})
export class BankModule { }
