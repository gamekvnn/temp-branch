import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

export enum PropertyBillIssueTypesEnum {
  MONTHLY = 'monthly',
  BI_MONTHLY = 'bi_monthly',
  QUARTERLY = 'quarterly',
  SEMI_ANNUALLY = 'semi_annually',
  ANNUALLY = 'annually',
}

export enum UtilityPaymentStyleEnum {
  FIXED_PER_PERSON = 'fixed_per_person',
  PER_KWH = 'per_kwh',
}

export enum PaymentOptionEnum {
  MONTH_END = 'month_end',
  FULL_MONTH = 'full_month',
}

export enum PaymentStyleEnum {
  BEFORE = 'before',
  AFTER = 'after',
}

@Schema({ timestamps: true, versionKey: false, collection: 'properties' })
export class PropertyEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    trim: true,
  })
  public name?: string;

  @Prop({
    type: Types.ObjectId,
  })
  public createdById!: Types.ObjectId;

  @Prop({
    type: String,
  })
  public type!: string;

  @Prop({
    type: Number,
  })
  public roomQuantity!: number;

  @Prop({
    type: Number,
  })
  public floors!: number;

  @Prop({
    type: Number,
  })
  public latitude!: number;

  @Prop({
    type: Number,
  })
  public longitude!: number;

  @Prop({
    type: Number,
  })
  public area!: number;

  @Prop({
    type: Number,
  })
  public rentalPrice!: number;

  @Prop({
    type: String,
    enum: PropertyBillIssueTypesEnum,
  })
  public billIssueType!: PropertyBillIssueTypesEnum;

  @Prop({
    type: Number,
  })
  public billIssueAtDay!: number;

  @Prop({
    type: Number,
  })
  public waterPrice?: number;

  @Prop({
    type: Number,
  })
  public electricPrice?: number;

  // New properties
  @Prop({
    type: String,
    enum: UtilityPaymentStyleEnum,
  })
  public waterPaymentStyle!: UtilityPaymentStyleEnum; // Array of utility objects

  @Prop({
    type: String,
    enum: PaymentOptionEnum,
  })
  public paymentOption!: PaymentOptionEnum;

  @Prop({
    type: String,
    enum: PaymentStyleEnum,
  })
  public paymentStyle!: PaymentStyleEnum;
}

export const PropertySchema = SchemaFactory.createForClass(PropertyEntity);

export type PropertyDocument = PropertyEntity & Document;

PropertySchema.set('toJSON', {
  virtuals: true,
});
