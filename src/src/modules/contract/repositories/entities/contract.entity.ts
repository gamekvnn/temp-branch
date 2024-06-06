import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { DatabaseMongoObjectIdEntityAbstract } from '@/base/database/abstracts/mongo/entities';

@Schema({ timestamps: true, versionKey: false, collection: 'contracts' })
export class ContractEntity extends DatabaseMongoObjectIdEntityAbstract {
  @Prop({
    type: String,
  })
  public printDate!: string;
}

export const ContractSchema = SchemaFactory.createForClass(ContractEntity);

export type ContractDocument = ContractEntity & Document;

ContractSchema.set('toJSON', {
  virtuals: true,
});
