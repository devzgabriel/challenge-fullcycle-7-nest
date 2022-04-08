import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll<Transaction>();
  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
    });
  }
}
