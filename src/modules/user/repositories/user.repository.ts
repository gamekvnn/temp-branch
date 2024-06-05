/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { UserDocument, UserEntity } from './entities';

import { IDatabaseCreateManyOptions } from '@/base/database/interfaces/database.interface';
import { DatabaseModel } from '@/base/database/decorators/database.decorator';
import {
  DatabaseMongoObjectIdRepositoryAbstract,
} from '@/base/database/abstracts/mongo/repositories/database.mongo.object-id.repository.abstract';

@Injectable()
export class UserRepository extends DatabaseMongoObjectIdRepositoryAbstract<
UserEntity,
UserDocument
> {
  constructor(
    @DatabaseModel(UserEntity.name)
    public userModel: Model<UserEntity>,
  ) {
    super(userModel);
  }

  public async createMany<Dto>(
    _data: Dto[],
    _options?: IDatabaseCreateManyOptions | undefined,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async findOneByPhoneNumber(phoneNumber: string): Promise<UserEntity | null> {
    return this.userModel.findOne({ phoneNumber }).exec();
  }
}
