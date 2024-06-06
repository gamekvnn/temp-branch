import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { SSEController } from '@/sse/sse.controller';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [SSEController],
})
export class SSEModule {}
