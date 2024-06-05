import { Module } from '@nestjs/common';

import { RoomFeeService } from './room-fee.service';
import { RoomFeeRepositoryModule } from './repositories/room-fee.repository.module';

@Module({
  imports: [
    RoomFeeRepositoryModule,
  ],
  providers: [RoomFeeService],
  exports: [RoomFeeService],
})
export class RoomFeeModule {}
