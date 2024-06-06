import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

@Schema({ timestamps: true, versionKey: false, collection: 'tenants' })
export class TenantEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    trim: true,
  })
  public firstName?: string;

  @Prop({
    trim: true,
  })
  public lastName?: string;

  @Prop({
    type: String,
  })
  public phoneNumber!: string;

  @Prop({
    type: String,
  })
  public password!: string;
}

export const TenantSchema = SchemaFactory.createForClass(TenantEntity);

export type TenantDocument = TenantEntity & Document;

TenantSchema.set('toJSON', {
  virtuals: true,
});
