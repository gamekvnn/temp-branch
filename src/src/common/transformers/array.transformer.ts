import { applyDecorators } from '@nestjs/common';
import { isString } from 'class-validator';
import { Transform } from 'class-transformer';

export const ArrayTransform = (): PropertyDecorator => {
  return applyDecorators(
    Transform(({ value }: { value: string | string[] }) => {
      if (isString(value)) {
        return [value];
      }

      return value;
    }),
  );
};
