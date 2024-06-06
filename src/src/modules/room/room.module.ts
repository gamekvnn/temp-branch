import { Module } from '@nestjs/common';

import { SessionRepositoryModule } from '../session/repositories/session.repository.module';
import { SessionService } from '../session/session.service';
import { PropertyService } from '../property/property.service';
import { PropertyRepositoryModule } from '../property/repositories/property.repository.module';

import { RoomService } from './room.service';
import { RoomRepositoryModule } from './repositories/room.repository.module';

@Module({
  imports: [
    RoomRepositoryModule,
    SessionRepositoryModule,
    PropertyRepositoryModule,
  ],
  providers: [RoomService, SessionService, PropertyService],
  exports: [RoomService],
})
export class RoomModule {}
