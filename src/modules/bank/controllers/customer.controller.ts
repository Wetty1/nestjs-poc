import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Customer } from '../infra/typeorm/models/customer.entity';
import { CreateCustomerService } from '../services/create-customer.service';
import { TransferService } from '../services/transfer.service';

@Controller('customer')
export class CustomerController {
    constructor(
        @Inject('CreateCustomerService')
        private readonly createCustomerService: CreateCustomerService,
        private readonly transferService: TransferService,
    ) { }

    @Post()
    async createCustomer(@Body() data) {
        console.log("create");
        return await this.createCustomerService.execute(data);
    }

    @Post('transfer')
    async transfer(@Body() data) {
        console.log("transfer: " + data);
        return await this.transferService.execute(data);
    }
}
