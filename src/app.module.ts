import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { BankModule } from './modules/bank/bank.module';
import { GithubModule } from './modules/github/github.module';

@Module({
  imports: [SharedModule, BankModule, GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
