import { Module } from '@nestjs/common';
import { CreateCustomerService } from './services/create-customer.service';
import { OpenAccountService } from './services/open-account.service';
import { CustomerController } from './controllers/customer/customer.controller';
import { CloseAccountService } from './services/close-account.service';
import { WithdrawMoneyService } from './services/withdraw-money.service';
import { TransferService } from './services/transfer.service';

@Module({
    imports: [],
    providers: [CreateCustomerService, OpenAccountService, CloseAccountService, WithdrawMoneyService, TransferService],
    controllers: [CustomerController],
})
export class BankModule { }
