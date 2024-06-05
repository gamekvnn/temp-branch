import { Module } from '@nestjs/common';

import { UserModule } from '@/modules/user';

@Module({
  controllers: [],
  imports: [
    UserModule,
  ],
})
export class RoutesTenantModule {}
