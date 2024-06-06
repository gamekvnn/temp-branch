/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';

import { EditPropertyDto } from '../dtos/edit-property.dto';

import { PropertyDocument, PropertyEntity } from './entities';

import { DatabaseMongoObjectIdRepositoryAbstract } from '@/base/database/abstracts/mongo/repositories/database.mongo.object-id.repository.abstract';
import { DatabaseModel } from '@/base/database/decorators/database.decorator';
import { IDatabaseCreateManyOptions } from '@/base/database/interfaces/database.interface';

@Injectable()
export class PropertyRepository extends DatabaseMongoObjectIdRepositoryAbstract<
PropertyEntity,
PropertyDocument
> {
  constructor(
    @DatabaseModel(PropertyEntity.name)
    public propertyModel: Model<PropertyEntity>,
  ) {
    super(propertyModel);
  }

  public async createMany<Dto>(
    _data: Dto[],
    _options?: IDatabaseCreateManyOptions | undefined,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async findByUserId(
    id: Types.ObjectId,
    userId: Types.ObjectId,
  ): Promise<PropertyEntity | null> {
    const property = this.propertyModel
      .findOne({ _id: id, createdById: userId })
      .exec();
    return property;
  }

  public async findAllByUserId(userId: string): Promise<PropertyEntity[]> {
    const properties = await this.findAll({
      createdById: new Types.ObjectId(userId),
    });
    return properties;
  }

  public async updateById(
    id: string,
    updateData: EditPropertyDto,
  ): Promise<boolean> {
    const result = await this.propertyModel.updateOne(
      { _id: new Types.ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      throw new NotFoundException('Room not found');
    }
    return true;
  }
}
