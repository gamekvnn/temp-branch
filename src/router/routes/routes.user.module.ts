import { Module } from '@nestjs/common';

import { UserModule } from '@/modules/user';
import { UserUserController } from '@/modules/user/controllers/user.user.controller';
import { AuthUserController } from '@/modules/@core/auth/controllers/auth.user.controller';
import { AuthModule } from '@/modules/@core/auth/auth.module';
import { AuthUserGuard } from '@/modules/@core/auth/guards/auth.user.guard';
import { RoomUserController } from '@/modules/room/controllers/room.user.controller';
import { RoomModule } from '@/modules/room';
import { SessionUserController } from '@/modules/session/controllers/session.user.controller';
import { SessionModule } from '@/modules/session';
import { TenantUserController } from '@/modules/tenant/controllers/tenant.user.controller';
import { TenantModule } from '@/modules/tenant';
import { PropertyModule } from '@/modules/property';
import { PropertyUserController } from '@/modules/property/controllers/property.user.controller';

@Module({
  controllers: [
    AuthUserController,
    UserUserController,
    RoomUserController,
    SessionUserController,
    TenantUserController,
    PropertyUserController,
  ],
  providers: [AuthUserGuard],
  imports: [UserModule, AuthModule, RoomModule, SessionModule, TenantModule, PropertyModule],
})
export class RoutesUserModule {}
