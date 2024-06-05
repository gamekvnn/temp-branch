
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';

import * as controllers from './controllers';
import { DatabaseOptionsModule } from './database/database.options.module';
import { DatabaseOptionsService } from './database/services/database.options.service';

import { configuration } from '@/config';
import { ConfigService } from '@/common';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'single',
        url: `redis://${configService.get('redis.host')}:${configService.get('redis.port')}`,
      }),
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [DatabaseOptionsModule],
      useFactory: (databaseOptionService: DatabaseOptionsService) => {
        return databaseOptionService.createOptions();
      },
      inject: [DatabaseOptionsService],
    }),
  ],
  controllers: Object.values(controllers),
})
export class BaseModule {}
