import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserEntity, UserSchema } from './entities';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserEntity.name,
        schema: UserSchema,
      },
    ]),
  ],
})
export class UserRepositoryModule {}
