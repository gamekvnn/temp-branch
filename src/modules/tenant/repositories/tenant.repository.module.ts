import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TenantEntity, TenantSchema } from './entities';
import { TenantRepository } from './tenant.repository';

@Module({
  providers: [TenantRepository],
  exports: [TenantRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: TenantEntity.name,
        schema: TenantSchema,
      },
    ]),
  ],
})
export class TenantRepositoryModule {}
