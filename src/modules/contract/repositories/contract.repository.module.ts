import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ContractEntity, ContractSchema } from './entities';
import { ContractRepository } from './contract.repository';

@Module({
  providers: [ContractRepository],
  exports: [ContractRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: ContractEntity.name,
        schema: ContractSchema,
      },
    ]),
  ],
})
export class ContractRepositoryModule {}
