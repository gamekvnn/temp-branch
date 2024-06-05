import { Module } from '@nestjs/common';

import { ReceiptService } from './receipt.service';
import { ReceiptRepositoryModule } from './repositories/receipt.repository.module';

@Module({
  imports: [
    ReceiptRepositoryModule,
  ],
  providers: [ReceiptService],
  exports: [ReceiptService],
})
export class ReceiptModule {}
