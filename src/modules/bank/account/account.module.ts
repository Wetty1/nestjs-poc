import { Module } from '@nestjs/common';
import { OpenAccountService } from './services/open-account.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Account } from './infra/typeorm/models/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [OpenAccountService],
})
export class AccountModule { }
