import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

@Schema({ timestamps: true, versionKey: false, collection: 'users' })
export class UserEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  public phoneNumber!: string;

  @Prop({
    type: String,
  })
  public firstName!: string;

  @Prop({
    type: String,
  })
  public lastName!: string;

  @Prop({
    type: String,
  })
  public email?: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

export type UserDocument = UserEntity & Document;

UserSchema.set('toJSON', {
  virtuals: true,
});
