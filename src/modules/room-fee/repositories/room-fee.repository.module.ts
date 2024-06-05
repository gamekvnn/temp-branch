import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoomFeeEntity, RoomFeeSchema } from './entities';
import { RoomFeeRepository } from './room-fee.repository';

@Module({
  providers: [RoomFeeRepository],
  exports: [RoomFeeRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: RoomFeeEntity.name,
        schema: RoomFeeSchema,
      },
    ]),
  ],
})
export class RoomFeeRepositoryModule {}
