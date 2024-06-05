import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PropertyEntity, PropertySchema } from './entities';
import { PropertyRepository } from './property.repository';

@Module({
  providers: [PropertyRepository],
  exports: [PropertyRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: PropertyEntity.name,
        schema: PropertySchema,
      },
    ]),
  ],
})
export class PropertyRepositoryModule {}
