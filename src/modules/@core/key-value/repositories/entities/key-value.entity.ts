import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

@Schema({ timestamps: true, versionKey: false, collection: 'key_values' })
export class KeyValueEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  public key!: string;

  @Prop({
    type: String,
  })
  public value!: string;
}

export const KeyValueSchema = SchemaFactory.createForClass(KeyValueEntity);

export type KeyValueDocument = KeyValueEntity & Document;

KeyValueSchema.set('toJSON', {
  virtuals: true,
});
