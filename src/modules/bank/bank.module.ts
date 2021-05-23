import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [CustomerModule, AccountModule]
})
export class BankModule {}
