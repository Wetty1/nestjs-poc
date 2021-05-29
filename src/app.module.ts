import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { BankModule } from './modules/bank/bank.module';
import { GithubModule } from './modules/github/github.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    SharedModule,
    BankModule,
    GithubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
