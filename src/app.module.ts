import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { BankModule } from './modules/bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
    imports: [SharedModule, BankModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
