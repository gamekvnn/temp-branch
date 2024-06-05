import { Module } from '@nestjs/common';

import { SchedulerService } from './scheduler.service';

@Module({
  imports: [],
  providers: [
    SchedulerService,
  ],
  exports: [],
})
export class SchedulerModule {}

