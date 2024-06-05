import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SessionEntity, SessionSchema } from './entities';
import { SessionRepository } from './session.repository';

@Module({
  providers: [SessionRepository],
  exports: [SessionRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: SessionEntity.name,
        schema: SessionSchema,
      },
    ]),
  ],
})
export class SessionRepositoryModule {}
