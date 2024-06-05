import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { RouterModule } from './router/router.module';
import { BaseModule } from './base';
import { AuthModule } from './modules/@core/auth/auth.module';
import { SchedulerModule } from './scheduler/scheduler.module';

import { CommonModule, LoggerMiddleware } from '@/common';
import { SSEModule } from '@/sse/sse.module';

@Module({
  imports: [

    // Base & Common.
    CommonModule,
    BaseModule,
    AuthModule,

    SSEModule,
    SchedulerModule,

    // Router modules.
    RouterModule.forRoot(),
  ],
})
export class AppModule implements NestModule {
  // Global Middleware, Inbound logging
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
