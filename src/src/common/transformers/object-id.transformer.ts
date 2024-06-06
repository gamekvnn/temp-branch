import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

export const ObjectIdTransformer = (): PropertyDecorator => {
  return applyDecorators(
    Transform(
      ({ value }: { value: string }): Types.ObjectId => {

        return new Types.ObjectId(value);
      },
    ),
  );
};
