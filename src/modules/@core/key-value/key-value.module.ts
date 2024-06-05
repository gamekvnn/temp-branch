import { Module } from '@nestjs/common';

import { KeyValueService } from './key-value.service';
import { KeyValueRepositoryModule } from './repositories/key-value.repository.module';

@Module({
  imports: [
    KeyValueRepositoryModule,
  ],
  providers: [KeyValueService],
  exports: [KeyValueService],
})
export class KeyValueModule {}
