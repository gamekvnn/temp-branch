import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReceiptEntity, ReceiptSchema } from './entities';
import { ReceiptRepository } from './receipt.repository';

@Module({
  providers: [ReceiptRepository],
  exports: [ReceiptRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: ReceiptEntity.name,
        schema: ReceiptSchema,
      },
    ]),
  ],
})
export class ReceiptRepositoryModule {}
