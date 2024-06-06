/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';


import { KeyValueDocument, KeyValueEntity } from './entities';

import {
  DatabaseMongoObjectIdRepositoryAbstract,
} from '@/base/database/abstracts/mongo/repositories/database.mongo.object-id.repository.abstract';
import { DatabaseModel } from '@/base/database/decorators/database.decorator';
import { IDatabaseCreateManyOptions } from '@/base/database/interfaces/database.interface';

@Injectable()
export class KeyValueRepository extends DatabaseMongoObjectIdRepositoryAbstract<
KeyValueEntity,
KeyValueDocument
> {
  constructor(
    @DatabaseModel(KeyValueEntity.name)
    public keyValueModel: Model<KeyValueEntity>,
  ) {
    super(keyValueModel);
  }

  public async createMany<Dto>(
    _data: Dto[],
    _options?: IDatabaseCreateManyOptions | undefined,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
