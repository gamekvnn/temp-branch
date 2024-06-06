import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { SeederService } from './seeder.service';

import { CommonModule, LoggerMiddleware } from '@/common';
import { BaseModule } from '@/base';
import { UserRepositoryModule } from '@/modules/user/repositories/user.repository.module';
import { KeyValueModule } from '@/modules/@core/key-value';
import { PropertyRepositoryModule } from '@/modules/property/repositories/property.repository.module';
import { RoomRepositoryModule } from '@/modules/room/repositories/room.repository.module';
import { SessionRepositoryModule } from '@/modules/session/repositories/session.repository.module';
import { TenantRepositoryModule } from '@/modules/tenant/repositories/tenant.repository.module';

@Module({
  imports: [
    CommonModule,
    BaseModule,
    UserRepositoryModule,
    PropertyRepositoryModule,
    RoomRepositoryModule,
    SessionRepositoryModule,
    TenantRepositoryModule,
    KeyValueModule,
  ],
  providers: [SeederService],
})
export class SeederModule implements NestModule {
  // Global Middleware, Inbound logging
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
