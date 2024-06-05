import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

@Schema({ timestamps: true, versionKey: false, collection: 'receipts' })
export class ReceiptEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    type: String,
  })
  public sessionId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
  })
  public paidByTenantId!: Types.ObjectId;

  @Prop({
    type: Date,
  })
  public paidAt!: Date;

  @Prop({
    type: Number,
  })
  public amount!: number;

  @Prop({
    type: Number,
  })
  public electricityBill?: number;

  @Prop({
    type: Number,
  })
  public waterBill?: number;

  @Prop({
    type: Number,
  })
  public gasBill?: number;

  @Prop({
    type: Number,
  })
  public internetBill?: number;

  @Prop({
    type: Number,
  })
  public othersBill?: number;

  @Prop({
    type: String,
  })
  public note?: string;
}

export const ReceiptSchema = SchemaFactory.createForClass(ReceiptEntity);

export type ReceiptDocument = ReceiptEntity & Document;

ReceiptSchema.set('toJSON', {
  virtuals: true,
});
