import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateCustomerService } from '../services/create-customer.service';

@Controller('customer')
export class CustomerController {
    constructor(
        @Inject("CreateCustomerService")
        private readonly createCustomerService: CreateCustomerService,
    ) { }

    @Post()
    async createCustomer(@Body() data) {
        try {
            return await this.createCustomerService.execute(data);
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
