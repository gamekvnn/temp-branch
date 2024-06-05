import { Module } from '@nestjs/common';

import { TenantService } from './tenant.service';
import { TenantRepositoryModule } from './repositories/tenant.repository.module';

@Module({
  imports: [
    TenantRepositoryModule,
  ],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
