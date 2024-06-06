import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

export enum RoomFeePaymentStatusEnum {
  PAID = 'paid',
  UNPAID = 'unpaid',
  PARTIALLY_PAID = 'partially_paid',
  PENDING = 'pending',
}

@Schema({ timestamps: true, versionKey: false, collection: 'room_fees' })
export class RoomFeeEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    type: Types.ObjectId,
  })
  public roomId!: string;

  @Prop({
    type: Number,
  })
  public totalAmount!: number;

  @Prop({
    type: Number,
    default: 0,
  })
  public discountAmount!: number;

  @Prop({
    type: Types.ObjectId,
  })
  public receiptId!: Types.ObjectId;

  @Prop({
    type: String,
    enum: RoomFeePaymentStatusEnum,
    default: RoomFeePaymentStatusEnum.PENDING,
  })
  public paymentStatus!: RoomFeePaymentStatusEnum;
}

export const RoomFeeSchema = SchemaFactory.createForClass(RoomFeeEntity);

export type RoomFeeDocument = RoomFeeEntity & Document;

RoomFeeSchema.set('toJSON', {
  virtuals: true,
});
