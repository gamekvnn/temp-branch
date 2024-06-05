import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { DatabaseBaseEntityAbstract } from '@/base/database/abstracts/database.base-entity.abstract';
import {
  DATABASE_CREATED_AT_FIELD_NAME,
  DATABASE_DELETED_AT_FIELD_NAME,
  DATABASE_UPDATED_AT_FIELD_NAME,
} from '@/base/database/constants/database.constant';
import { DatabaseDefaultObjectId } from '@/base/database/constants/database.function.constant';

export abstract class DatabaseMongoObjectIdEntityAbstract extends DatabaseBaseEntityAbstract<Types.ObjectId> {
  @Prop({
    type: Types.ObjectId,
    default: DatabaseDefaultObjectId,
  })
  public _id!: Types.ObjectId;

  @Prop({
    required: false,
    index: true,
    type: Date,
  })
  public [DATABASE_DELETED_AT_FIELD_NAME]?: Date;

  @Prop({
    required: false,
    index: true,
    type: Date,
  })
  public [DATABASE_CREATED_AT_FIELD_NAME]?: Date;

  @Prop({
    required: false,
    index: true,
    type: Date,
  })
  public [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;
}
