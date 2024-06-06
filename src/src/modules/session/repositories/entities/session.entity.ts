import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

export enum SessionStatusEnum {
  ACTIVE = 'active',
  TERMINATED = 'terminated',
  CANCELLED = 'cancelled',
}

@Schema({ timestamps: true, versionKey: false, collection: 'sessions' })
export class SessionEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    type: Types.ObjectId,
  })
  public roomId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
  })
  public propertyId!: Types.ObjectId;

  @Prop({
    type: Number,
  })
  public depositAmount!: number;

  @Prop({
    type: Types.ObjectId,
  })
  public tennantId!: Types.ObjectId;

  @Prop({
    type: Date,
  })
  public startDate!: Date;

  @Prop({
    type: Date,
  })
  public terminationDate?: Date;

  @Prop({
    type: String,
    enum: SessionStatusEnum,
  })
  public status!: SessionStatusEnum;
}

export const SessionSchema = SchemaFactory.createForClass(SessionEntity);

export type SessionDocument = SessionEntity & Document;

SessionSchema.set('toJSON', {
  virtuals: true,
});
