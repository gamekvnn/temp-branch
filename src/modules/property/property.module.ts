import { Module } from '@nestjs/common';

import { PropertyService } from './property.service';
import { PropertyRepositoryModule } from './repositories/property.repository.module';

@Module({
  imports: [
    PropertyRepositoryModule,
  ],
  providers: [PropertyService],
  exports: [PropertyService],
})
export class PropertyModule {}
