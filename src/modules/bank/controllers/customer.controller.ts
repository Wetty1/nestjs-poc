import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Customer } from '../infra/typeorm/models/customer.entity';
import { CreateCustomerService } from '../services/create-customer.service';

@Controller('customer')
export class CustomerController {
    constructor(
        @Inject("CreateCustomerService")
        private readonly createCustomerService: CreateCustomerService,
    ) { }

    @Post()
    async createCustomer(@Body() data) {
        return await this.createCustomerService.execute(data);
    }
}
