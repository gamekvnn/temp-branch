import { Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';

import { PropertyEntity } from './repositories/entities';
import { PropertyRepository } from './repositories/property.repository';
import { EditPropertyDto } from './dtos/edit-property.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  public async findById(id: string): Promise<PropertyEntity | null> {
    return this.propertyRepository.findOneById(id);
  }

  public async findByUserId(
    id: string,
    userId: string,
  ): Promise<PropertyEntity | null> {
    return this.propertyRepository.findByUserId(
      new Types.ObjectId(id),
      new Types.ObjectId(userId),
    );
  }

  public async getPropertiesByUserId(
    userId: string,
  ): Promise<PropertyEntity[]> {
    const properties = await this.propertyRepository.findAllByUserId(userId);

    return properties;
  }

  public async editProperty(
    propertyId: string,
    userId: string,
    updateData: EditPropertyDto,
  ): Promise<boolean> {
    const property = await this.findByUserId(propertyId, userId);
    if (!property) {
      throw new NotFoundException(
        'Property could not be update because it not belong to your',
      );
    }

    const result = await this.propertyRepository.updateById(
      propertyId,
      updateData,
    );

    return result;
  }
}
