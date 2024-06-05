import { Module } from '@nestjs/common';

import { PropertyService } from '../property/property.service';
import { PropertyRepositoryModule } from '../property/repositories/property.repository.module';

import { SessionService } from './session.service';
import { SessionRepositoryModule } from './repositories/session.repository.module';

@Module({
  imports: [SessionRepositoryModule, PropertyRepositoryModule],
  providers: [SessionService, PropertyService],
  exports: [SessionService],
})
export class SessionModule {}
