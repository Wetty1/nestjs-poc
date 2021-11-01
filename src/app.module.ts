import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { BankModule } from './modules/bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
    imports: [TypeOrmModule.forRoot(ormconfig), SharedModule, BankModule],
})
export class AppModule { }
