import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';
import { SessionEntity } from '@/modules/session/repositories/entities';

export enum RoomTypesEnum {
  STUDIO = 'STUDIO',
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
}

@Schema({ timestamps: true, versionKey: false, collection: 'rooms' })
export class RoomEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({})
  public roomNumber!: string;

  @Prop({})
  public roomName?: string;

  @Prop({
    type: Number,
  })
  public price!: number;

  @Prop({
    type: Types.ObjectId,
  })
  public propertyId!: Types.ObjectId;

  @Prop({
    type: String,
    enum: RoomTypesEnum,
  })
  public type!: RoomTypesEnum;

  @Prop({
    type: Number,
  })
  public floor!: number;

  @Prop({
    type: Number,
  })
  public area!: number;

  @Prop({
    type: Number,
  })
  public bedQuantity?: number;

  @Prop({
    type: Number,
  })
  public bathroomQuantity?: number;

  @Prop({
    type: Number,
  })
  public bedroomQuantity?: number;

  @Prop({
    type: Number,
  })
  public livingRoomQuantity?: number;

  @Prop({
    type: Number,
  })
  public kitchenQuantity?: number;

  @Prop({
    type: Boolean,
  })
  public haveBalcony?: boolean;
  
  @Prop({
    type: SessionEntity,
  })
  public session?: SessionEntity;
}

export const RoomSchema = SchemaFactory.createForClass(RoomEntity);

export type RoomDocument = RoomEntity & Document;

RoomSchema.set('toJSON', {
  virtuals: true,
});
