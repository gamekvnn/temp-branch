/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';


import { ReceiptDocument, ReceiptEntity } from './entities';

import {
  DatabaseMongoObjectIdRepositoryAbstract,
} from '@/base/database/abstracts/mongo/repositories/database.mongo.object-id.repository.abstract';
import { DatabaseModel } from '@/base/database/decorators/database.decorator';
import { IDatabaseCreateManyOptions } from '@/base/database/interfaces/database.interface';

@Injectable()
export class ReceiptRepository extends DatabaseMongoObjectIdRepositoryAbstract<
ReceiptEntity,
ReceiptDocument
> {
  constructor(
    @DatabaseModel(ReceiptEntity.name)
    public receiptModel: Model<ReceiptEntity>,
  ) {
    super(receiptModel);
  }

  public async createMany<Dto>(
    _data: Dto[],
    _options?: IDatabaseCreateManyOptions | undefined,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
