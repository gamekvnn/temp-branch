import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoomEntity, RoomSchema } from './entities';
import { RoomRepository } from './room.repository';

@Module({
  providers: [RoomRepository],
  exports: [RoomRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: RoomEntity.name,
        schema: RoomSchema,
      },
    ]),
  ],
})
export class RoomRepositoryModule {}
