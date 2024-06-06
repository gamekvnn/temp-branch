import { applyDecorators } from '@nestjs/common';
import { IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export const IsBoolTransformer = (): PropertyDecorator => {
  return applyDecorators(
    IsBoolean(),
    Transform(({ value }: { value: string | boolean }) => value === '1' || value === 'true' || value === true),
  );
};
