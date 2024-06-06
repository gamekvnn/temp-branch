import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { KeyValueEntity, KeyValueSchema } from './entities';
import { KeyValueRepository } from './key-value.repository';

@Module({
  providers: [KeyValueRepository],
  exports: [KeyValueRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: KeyValueEntity.name,
        schema: KeyValueSchema,
      },
    ]),
  ],
})
export class KeyValueRepositoryModule {}
