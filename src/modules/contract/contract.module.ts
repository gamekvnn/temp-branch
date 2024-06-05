import { Module } from '@nestjs/common';

import { ContractService } from './contract.service';
import { ContractRepositoryModule } from './repositories/contract.repository.module';

@Module({
  imports: [
    ContractRepositoryModule,
  ],
  providers: [ContractService],
  exports: [ContractService],
})
export class ContractModule {}
