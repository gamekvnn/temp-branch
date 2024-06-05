import { Module } from '@nestjs/common';

import { UserModule } from '@/modules/user';
import { UserUserController } from '@/modules/user/controllers/user.user.controller';

@Module({
  controllers: [
    UserUserController,
  ],
  imports: [
    UserModule,
  ],
})
export class RoutesPublicModule {}
