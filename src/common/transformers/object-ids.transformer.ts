import { applyDecorators } from '@nestjs/common';
import _ from 'lodash';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

export const ObjectIdsTransformer = (): PropertyDecorator => {
  return applyDecorators(
    Transform(
      ({ value }: { value: string | string[] }): Types.ObjectId[] | Types.ObjectId => {
        if (_.isArray(value)) {
          return value.map((teamId: string) => new Types.ObjectId(teamId));
        }

        return new Types.ObjectId(value);
      },
    ),
  );
};
