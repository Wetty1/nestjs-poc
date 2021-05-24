import { Module } from '@nestjs/common';
import { CreateCustomerService } from './services/create-customer.service';

@Module({
  providers: [CreateCustomerService]
})
export class CustomerModule { }
