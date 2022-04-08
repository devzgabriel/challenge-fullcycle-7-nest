import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Transaction } from './transactions/entities/transaction.entity';

@Module({
  imports: [
    TransactionsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      models: [Transaction],
    }),
  ],
})
export class AppModule {}
